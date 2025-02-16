import IntegrationsCard from "@/components/settings/IntegrationsCard";
import { integrations } from "@/assets/constants";

const Integrations = () => {
  return (
    <div className="h-full w-full flex flex-wrap gap-8">
      {integrations.map((item, index) => {
        return (
          <IntegrationsCard
            key={index}
            name={item.name}
            description={item.desciption}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default Integrations;
