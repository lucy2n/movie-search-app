import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './tabs.module.css';

export default function MenuTabs () {
    return (
        <Tabs orientation="vertical" variant="unstyled" defaultValue="movies" classNames={classes}>
          <Tabs.List grow>
            <Tabs.Tab
              value="movies"
            >
              Movies
            </Tabs.Tab>
            <Tabs.Tab
              value="rated"
            >
              Rated movies
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      );
}