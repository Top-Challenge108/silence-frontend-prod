import * as React from "react";
import MuiList from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { TextField, useTheme } from "@mui/material";
import { Container, ListContainer, SearchContainer } from "./styled";
import { useChat } from "../context";
import { useRouter } from "next/router";
import { CustomAvatar } from "components/custom-avatar";
const users = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const List = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const { chatList } = useChat();

  const handleSelect = (type, id) => router.push(`/chat/${type}/${id}`);

  const drawer = (
    <Container>
      <SearchContainer>
        <TextField size="small" fullWidth placeholder="Search user" />
      </SearchContainer>
      <Divider component="div" />
      <ListContainer>
        <MuiList disablePadding>
          {chatList?.map((chat, key) => (
            <div key={key}>
              <ListItem alignItems="flex-start" disablePadding>
                <ListItemButton onClick={() => handleSelect(chat.type, chat.id)} disableRipple>
                  <ListItemAvatar>
                    <CustomAvatar name={chat.name} src="/static/images/avatar/1.jpg" alt={chat.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography component="span" variant="subtitle2" color="text.primary">
                          How are you?
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography component="span" variant="caption" color="text.secondary">
                          How are you?
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
        </MuiList>
      </ListContainer>
    </Container>
  );

  return <>{mobile ? <Drawer open={false}>{drawer}</Drawer> : <>{drawer}</>}</>;
};

export default List;
