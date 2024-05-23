import { Tabs } from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './tabs.module.css';
import Link from "next/link";

export default function MenuTabs () {

  const { height, width } = useViewportSize();

  const orientation = width > 910 ? "vertical" : "horizontal";

    return (
        <Tabs orientation={orientation} variant="unstyled" defaultValue="movies" classNames={classes}>
          <Tabs.List grow>
            <Link
               href={'/'}
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