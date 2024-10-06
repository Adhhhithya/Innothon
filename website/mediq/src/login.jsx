import React, { useState } from 'react';
import { UserCircle, Hospital, ArrowLeft, LogIn, UserPlus } from 'lucide-react';
import './login.css'

// Button setup function
const Button = ({ onClick, children, variant = 'primary' }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-sm";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} transition-colors duration-200`}
    >
      {children}
    </button>
  );
};

// Setting up requirements for Input from user
const Input = ({ label, type, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

// For letting user select the choice of patient or hospital staff
const UserTypeSelection = ({ onSelect }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-6">Are you a:</h2>
    <div className="space-y-4">
      <Button onClick={() => onSelect('patient')} className="w-full">
        <UserCircle className="inline-block mr-2" size={20} />
        Patient
      </Button>
      <Button onClick={() => onSelect('staff')} className="w-full">
        <Hospital className="inline-block mr-2" size={20} />
        Hospital Staff
      </Button>
    </div>
  </div>
);

// For diplaying registration form
const RegistrationForm = ({ userType, onBack, onToggle, onSuccess }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">
      {userType === 'patient' ? 'Patient Registration' : 'Hospital Staff Registration'}
    </h2>
    <form onSubmit={onSuccess} className="space-y-4">
      <Input label="Name" type="text" required />
      <Input label="Email ID" type="email" required />
      <Input label="Mobile Number" type="tel" required />
      <Input label="Password" type="password" required />
      <Button type="submit">Register</Button>
    </form>
    <div className="mt-4 space-x-4">
      <Button onClick={onBack} variant="secondary">
        <ArrowLeft className="inline-block mr-2" size={16} />
        Back
      </Button>
      <Button onClick={onToggle} variant="secondary">
        <LogIn className="inline-block mr-2" size={16} />
        Already have an account? Login
      </Button>
    </div>
  </div>
);

// For displaying login form
const LoginForm = ({ userType, onBack, onToggle }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">
      {userType === 'patient' ? 'Patient Login' : 'Hospital Staff Login'}
    </h2>
    <form className="space-y-4">
      <Input label="Username" type="text" required />
      <Input label="Password" type="password" required />
      <Button type="submit">Login</Button>
    </form>
    <div className="mt-4 space-x-4">
      <Button onClick={onBack} variant="secondary">
        <ArrowLeft className="inline-block mr-2" size={16} />
        Back
      </Button>
      <Button onClick={onToggle} variant="secondary">
        <UserPlus className="inline-block mr-2" size={16} />
        Don't have an account? Register
      </Button>
    </div>
  </div>
);

// If registration is successfull, displaying a success message and redirecting to login form
const SuccessMessage = ({ onBack }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">Welcome to the Hospital Appointment System!</h2>
    <p className="text-lg mb-2">Registration Successful!</p>
    <p className="mb-6">Thank you for registering! You can now log in to access your account.</p>
    <Button onClick={onBack}>Login to your account</Button>
  </div>
);

// Main component for the above functionality
export const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [userType, setUserType] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setIsRegistering(false);
    setIsRegistered(false);
  };

  const handleBack = () => {
    setUserType(null);
    setIsRegistered(false);
  };

  const handleToggleRegistration = () => {
    setIsRegistering(!isRegistering);
  };

  const handleRegistrationSuccess = (event) => {
    event.preventDefault();
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        {isRegistered ? (
          <SuccessMessage onBack={handleBack} />
        ) : userType === null ? (
          <UserTypeSelection onSelect={handleUserTypeSelection} />
        ) : isRegistering ? (
          <RegistrationForm
            userType={userType}
            onBack={handleBack}
            onToggle={handleToggleRegistration}
            onSuccess={handleRegistrationSuccess}
          />
        ) : (
          <LoginForm
            userType={userType}
            onBack={handleBack}
            onToggle={handleToggleRegistration}
          />
        )}
      </div>
    </div>
  );
};
