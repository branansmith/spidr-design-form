import React, { useState } from "react";

function printToConsole(event) {
    event.preventDefault();

    const form = event.target;

    const data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        phone: form.phone.value,
        email: form.email.value,
        guess: form.guess.value,
        pin: form.pin.value,
    };

    console.log(
        "First Name: " + data.firstName + "\n" +
        "Last Name: " + data.lastName + "\n" +
        "Phone Number: " + data.phone + "\n" +
        "Email Address: " + data.email + "\n" +
        "Your air fryer cost guess: " + data.guess + "\n" +
        "Super Secret Spidr PIN: " + data.pin
    );
}

const formatPin = (value) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 16);
    return digitsOnly.replace(/(.{4})(?=.)/g, "$1-");
};

const AirFryerSubmissionForm = () => {
    const [pin, setPin] = useState("");

    const handlePinChange = (e) => {
        const formatted = formatPin(e.target.value);
        setPin(formatted);
    };

    return (
        <div id="fryer-form-container">
            <form onSubmit={printToConsole}>
                <label>
                    First Name
                    <input type="text" name="firstName" required />
                </label>

                <label>
                    Last Name
                    <input type="text" name="lastName" required />
                </label>

                <label>
                    Phone Number
                    <input type="tel" name="phone" required />
                </label>

                <label>
                    Email Address
                    <input type="email" name="email" required />
                </label>

                <label>
                    Guess the air fryer's cost (dollar amount)
                    <input type="number" name="guess" min="1" step="any" required />
                </label>

                <label>
                    Super Secret Spidr PIN (16 digits)
                    <input
                        type="text"
                        name="pin"
                        value={pin}
                        onChange={handlePinChange}
                        placeholder="####-####-####-####"
                        inputMode="numeric"
                        required
                    />
                </label>

                <button className="btn info" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AirFryerSubmissionForm;
