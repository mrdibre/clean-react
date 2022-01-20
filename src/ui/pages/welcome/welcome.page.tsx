import {
  Typography,
  Box,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const WelcomePage = () => (
  <Box width="100vw" height="100vh">
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography variant="h3">Clean React Template</Typography>
      <br /> <br />
      <List
        subheader={
          <ListSubheader>
            <Typography>This template uses:</Typography>
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText
            primary={<Link href="https://mui.com/">Material UI</Link>}
            secondary="For Components"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link href="https://styled-components.com/">
                Styled Components
              </Link>
            }
            secondary="For Styling"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Link href="https://storybook.js.org/">Storybook</Link>}
            secondary="For Docs"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Link href="https://reactrouter.com/">React Router</Link>}
            secondary="For Navigation"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link href="https://testing-library.com/">
                Jest, Testing Library and Test Library React Hooks
              </Link>
            }
            secondary="For Tests"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link href="https://eslint.org/">
                ESLint, husky, prettier and a lot of eslint plugins
              </Link>
            }
            secondary="For Code Quality"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link href="https://github.com/timarney/react-app-rewired">
                React App Rewired
              </Link>
            }
            secondary="For configuration"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="And more..." />
        </ListItem>
      </List>
    </Box>
  </Box>
);

export { WelcomePage };
