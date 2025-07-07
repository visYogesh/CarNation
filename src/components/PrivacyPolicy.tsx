import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen py-10">
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto px-6 text-gray-800 leading-relaxed">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Privacy Policy
        </h1>

        <p className="mb-4 text-xl font-semibold">
          Welcome to CarNation. Your privacy is important to us. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website.
        </p>

        <h2 className="text-black text-2xl font-semibold mt-8 mb-4 ">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Personal Identification Information (Name, email, phone number,
            etc.)
          </li>
          <li>Vehicle details for sales, rentals, or servicing</li>
          <li>Usage data and cookies for improving user experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use the information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide, operate, and maintain our services</li>
          <li>Improve customer experience and our website</li>
          <li>
            Communicate with you regarding inquiries, services, and promotions
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          3. Data Sharing & Disclosure
        </h2>
        <p className="mb-4">
          We do not sell or trade your personal information. Your data may be
          shared with trusted third-party service providers who assist us in
          operating our website or servicing you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          4. Security
        </h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your personal data from unauthorized access, alteration,
          disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          5. Your Rights
        </h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal data. To
          exercise these rights, please contact us using the information
          provided on our Contact page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          6. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We encourage you
          to review it periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          7. Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, feel
          free to contact us through our Contact page.
        </p>

        <p className="text-sm text-gray-500 mt-10 text-center">
          Last updated: July 7, 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
