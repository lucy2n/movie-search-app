import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './tabs.module.css';
import Link from "next/link";

export default function MenuTabs () {
    return (
        <Tabs orientation="vertical" variant="unstyled" defaultValue="movies" classNames={classes}>
          <Tabs.List grow>
            <Link
               href={'/movies/movies'}
               style={{textDecoration: 'none'}}
            >
              <Tabs.Tab
                  value="movies"
                >
                  Movies
              </Tabs.Tab>
            </Link>
            <Link
                href={'/rated-movies/rated-movies'}
                style={{textDecoration: 'none'}}
              >
              <Tabs.Tab
                value="rated"
              >
                Rated movies
              </Tabs.Tab>
            </Link>
          </Tabs.List>
        </Tabs>
      );
}