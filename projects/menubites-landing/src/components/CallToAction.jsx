import {Text} from "@chakra-ui/react";
import "./CallToAction.css"



const CallToAction = () => {
    return (
      <div id="call-to-action-container">
          <TextDescribesForm/>
          <Form/>
      </div>
    );
}

const TextDescribesForm = () => {
    return (
        <div id="text-describes-form-container">
            <Text id="are-interested-text">
                Are you interest it?
            </Text>
            <Text id="call-to-action">
                Join our waitlist to be the first to receive updates about our product.
            </Text>
        </div>
    );
}

const Form = () => {
    return (
        <form id='form'>
            <div id="input-group">
                <label id="email-text-label" for="email-text">Email:</label>
                <input id="email-text" type="email" name="email" placeholder="Enter your email here." />
            </div>
            <input id="submit-button" type="submit" value="Submit"/>
        </form>
    );
}

export default CallToAction;