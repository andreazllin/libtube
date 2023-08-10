import { FunctionComponent, useState } from "react"
import {
  AppShell,
  Navbar,
  Header,
  // Footer,
  // Aside,
  Text,
  MediaQuery,
  ScrollArea,
  Burger,
  useMantineTheme
} from "@mantine/core"
import { links } from "$constants/navbar"
import NavbarLinkItem from "$components/Navbar/LinkItem"
import { Outlet } from "react-router-dom"
import SearchBar from "./SearchBar"

const Layout: FunctionComponent = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            {
              links.map((item, index) => (
                <NavbarLinkItem {...item} key={index} />
              ))
            }
          </Navbar.Section>
        </Navbar>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       Right sidebar
      //     </Aside>
      //   </MediaQuery>
      // }
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text size={"xl"} mr={16}>
              lib
              <Text color={theme.primaryColor} component="span">tube.</Text>
            </Text>

            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <div style={{ flex: 1 }}></div>
            </MediaQuery>

              <div style={{ flex: 1 }}>
                <SearchBar />
              </div>

            <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
              <div style={{ flex: 1 }}></div>
            </MediaQuery>
          </div>
        </Header>
      }
    >
      <Outlet />
      {/* {children} */}
    </AppShell>
  );
}

export default Layout
