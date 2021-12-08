import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";

type Category={
  name: string;
  icon: string;
  id: number;
  slug: string;
}
function SideNav() {
  const [category, setCategory] = React.useState<Category[]>([]);

  React.useEffect(()=>{
    fetch(`${process.env.API_KEY}/category/`)
    .then(res => res.json())
    .then(
      (result) => {
        setCategory(result)
      },
      (error) => {
        console.log(error)
      }
    )
  },[])
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {
            category.map(item=>
              <ListItem disablePadding key={item.id}>
              <ListItemButton>
                <ListItemIcon>
                  <img width="25px" src={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
              )
          }
        </List>
      </nav>
    </Box>
  );
}

export default SideNav;
