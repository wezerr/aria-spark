import { Switch } from '@headlessui/react';
import { useState } from 'react';

export function SwitchDemo() {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [updates, setUpdates] = useState(true);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">Switch</h3>
        <p className="text-muted-foreground mt-1">Toggle switches with smooth animations</p>
      </div>

      <div className="bg-card rounded-lg p-6 space-y-4 border border-border shadow-sm">
        <SwitchItem
          enabled={notifications}
          onChange={setNotifications}
          label="Push Notifications"
          description="Receive notifications about your account activity"
        />
        <SwitchItem
          enabled={marketing}
          onChange={setMarketing}
          label="Marketing Emails"
          description="Receive emails about new products and features"
        />
        <SwitchItem
          enabled={updates}
          onChange={setUpdates}
          label="Product Updates"
          description="Get notified when we ship new updates"
        />
      </div>
    </div>
  );
}

function SwitchItem({ enabled, onChange, label, description }: {
  enabled: boolean;
  onChange: (value: boolean) => void;
  label: string;
  description: string;
}) {
  return (
    <Switch.Group>
      <div className="flex items-center justify-between py-2">
        <div className="flex-1">
          <Switch.Label className="text-sm font-medium text-foreground cursor-pointer">
            {label}
          </Switch.Label>
          <Switch.Description className="text-sm text-muted-foreground">
            {description}
          </Switch.Description>
        </div>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? 'bg-gradient-to-r from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)]' : 'bg-border'
          } relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
