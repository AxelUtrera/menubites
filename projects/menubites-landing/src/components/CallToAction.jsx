import {Text} from "@chakra-ui/react";
import "./CallToAction.css"
import { useTranslation } from "react-i18next";
import swal from "sweetalert";



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

    const submit = (e) => {
        e.preventDefault();
        const formElement = document.querySelector("form");
        const email = formElement.elements[0].value;

        if (email === null || email === "") {
            swal({
                title: t("call_to_action_title_alert_email_submit_empty_email"),
                text: t("call_to_action_text_alert_email_submit_empty_email"),
                icon: "info",
                button: t("call_to_action_button_content_alert_email_submit")
            });
            return;
        }

        let formData = new FormData(formElement);
        fetch("https://script.google.com/macros/s/AKfycbz0ES75Hp8Ujahmefm1Od-_xkhKIr0q795_RA10SDeXkGCBPn8bfXcd3Mw3hGDVRrjRbQ/exec",{
            method: "POST",
            body: formData
        }).then((response) =>
            response.json())
            .then((data) => {
            swal({
                title: t("call_to_action_title_alert_email_submit_ok"),
                text: t("call_to_action_text_alert_email_submit_ok"),
                icon: "success",
                button: t("call_to_action_button_content_alert_email_submit")
            });
        }).catch((error) =>
            swal({
                title: t("call_to_action_title_alert_email_submit_error"),
                text: t("call_to_action_text_alert_email_submit_error"),
                icon: "error",
                button: t("call_to_action_button_content_alert_email_submit")
            })
        );
    }

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

const validateEmailField  = (email) => {
}



export default CallToAction;