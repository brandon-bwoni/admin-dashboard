import SettingsNav from "@/components/settings/SettingsNav";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SettingsNav />
      {children}
    </div>
  );
};

export default SettingsLayout;
