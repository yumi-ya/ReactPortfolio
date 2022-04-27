import React from "react";
import menu from "./imgs/icon.svg";

// import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CurrencyYenOutlinedIcon from "@mui/icons-material/CurrencyYenOutlined";

const drawerWidth = 240;

const styles = {
  logo: {
    display: "flex",
    alignItems: "center",
    margin: "5px",
    width: "50px"
  },
  logoTitle: {
    marginBottom: 0
  },
  nav: {
    height: "80px",
    bgcolor: "#FA8B61"
  },
  inbox: {
    bgcolor: "#F5B55A",
    "&:hover": {
      bgcolor: "#FAE134"
    }
    // "&:active": {
    //   bgcolor: "#FAE134"
    // },
  },
  mail: {
    bgcolor: "#96EB79",
    "&:hover": {
      bgcolor: "#61D49A"
    }
  },
  hamburger: {
    display: "none",
    "@media screen and (max-width: 800px)": {
      display: "block",
      fontSize: "40px"
    }
  }
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  })
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={styles.nav}>
          <img src={menu} alt="" style={styles.logo} />
          <Typography variant="h5" noWrap sx={{ flexGrow: 1 }} component="div">
            <h2 className="logoTitle">YagiWorks</h2>
            <ul className="navList">
              <li className="navList">制作物</li>
              <li className="navList">スキル</li>
              <li className="navList">自己紹介</li>
              <li className="navList">金額</li>
              <li className="navList">FAQ</li>
              <li className="navList">お問い合わせ</li>
            </ul>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={styles.hamburger} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        {/* <Typography paragraph>
          abc
        </Typography>
        <Typography paragraph>
          abc
        </Typography> */}
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["私たちについて", "実績"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <DoneOutlineOutlinedIcon />
                ) : (
                  <ConnectedTvOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["料金", "お見積もり"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <CurrencyYenOutlinedIcon />
                ) : (
                  <FeedOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["資料ダウンロード"].map((text, index) => (
            <ListItem button key={text} sx={styles.inbox}>
              <ListItemIcon>
                {index % 0 === 0 ? <InboxIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {["お問い合わせ"].map((text, index) => (
            <ListItem button key={text} sx={styles.mail}>
              <ListItemIcon>
                {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

// const Header : React.VFC = () => {
//   return (
//    <div className="header">
//      <img className="icon" src={menu} alt=""/>
//   <h2>ReactTest</h2>

//   </div>
//   );
// };

// export default Header;
