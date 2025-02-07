import SettingsNav from "@/components/settings/SettingsNav";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4">
      <SettingsNav />
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default SettingsLayout;
