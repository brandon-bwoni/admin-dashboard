import { Switch } from "@/components/ui/switch";

export function SwitchToggle() {
  return (
    <div className="w-6 h-3  flex items-center space-x-2">
      <Switch id="activate" />
      {/* <label htmlFor="airplane-mode">Airplane Mode</label> */}
    </div>
  );
}
