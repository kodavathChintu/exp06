import React, { useState } from 'react';
import './PasswordStrengthChecker.css'; // Optional for styling

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const checkPasswordStrength = (password) => {
        let strength = 0;

        // Increase strength for length
        if (password.length >= 8) strength++;
        // Check for lowercase letters
        if (/[a-z]/.test(password)) strength++;
        // Check for uppercase letters
        if (/[A-Z]/.test(password)) strength++;
        // Check for numbers
        if (/[0-9]/.test(password)) strength++;
        // Check for special characters
        if (/[\W_]/.test(password)) strength++;

        switch (strength) {
            case 0:
            case 1:
                return 'Very Weak';
            case 2:
                return 'Weak';
            case 3:
                return 'Moderate';
            case 4:
                return 'Strong';
            default:
                return '';
        }
    };

    const handleChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setStrength(checkPasswordStrength(newPassword));
    };

    return (
        <div className="container mt-5">
            <h2>Password Strength Checker</h2>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                <small className="form-text text-muted">
                    Strength: {strength}
                </small>
                <div className={`strength-meter ${strength.toLowerCase().replace(' ', '-')}`}>
                    {/* Visual representation can be added here */}
                </div>
            </div>
        </div>
    );
};

export default PasswordStrengthChecker;
