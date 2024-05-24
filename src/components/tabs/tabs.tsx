import { Tabs } from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import classes from './tabs.module.css';
import Link from "next/link";
import { useEffect, useState } from "react";

export const MenuTabs = (): JSX.Element => {

  const { height, width } = useViewportSize();

  const orientation = width > 910 ? "vertical" : "horizontal";

  const [activeTab, setActiveTab] = useState<string | null>('movies');

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleTabChange = (newTab: string | null) => {
    if (newTab == null) {
      return
    }
    setActiveTab(newTab);
    localStorage.setItem('activeTab', newTab);
  };

  return (
      <Tabs value={activeTab} onChange={handleTabChange} orientation={orientation} variant="unstyled" defaultValue="movies" classNames={classes}>
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
              href={'/rated-movies'}
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