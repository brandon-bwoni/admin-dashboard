import AccountSettings from "@/components/settings/security/AccountSettings";
import AuthSettings from "@/components/settings/security/AuthSettings";

const PrivacySettings = () => {
  return (
    <div className="w-full flex gap-6">
      <div className="w-[70%]">
        <AccountSettings />
      </div>
      <div className="w-[28%]">
        <AuthSettings />
      </div>
    </div>
  );
};

export default PrivacySettings;
