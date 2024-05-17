import {Text} from "@chakra-ui/react";
import "./CallToAction.css"
import { useTranslation } from "react-i18next";



const CallToAction = () => {
    return (
      <div id="call-to-action-container">
          <TextDescribesForm/>
          <Form/>
      </div>
    );
}

const TextDescribesForm = () => {
    const { t } = useTranslation();
    return (
        <div id="text-describes-form-container">
            <Text id="are-interested-text">
                {t("call_to_action_are_interested")}
            </Text>
            <Text id="call-to-action">
            {t("call_to_action_call_to")}
            </Text>
        </div>
    );
}

const Form = () => {
    const { t } = useTranslation();
    return (
        <form id='form' onSubmit={(e) => submit(e)}>
            <div id="input-group">
                <label id="email-text-label" htmlFor="email-text">Email:</label>
                <input id="email-text" type="email" name="Email" placeholder={t("call_to_action_email_placeholder")} />
            </div>
            <input id="submit-button" type="submit" value={t("call_to_action_email_submit")}/>
        </form>
    );
}

const submit = (e) => {
    e.preventDefault();
    const formElement = document.querySelector("form");
    let formData = new FormData(formElement);
    fetch("https://script.google.com/macros/s/AKfycbz0ES75Hp8Ujahmefm1Od-_xkhKIr0q795_RA10SDeXkGCBPn8bfXcd3Mw3hGDVRrjRbQ/exec",{
        method: "POST",
        body: formData
    }).then((response) => response.json()).then((data) => {
        console.log(data)
    }).catch((error) => console.log(error));
}

export default CallToAction;