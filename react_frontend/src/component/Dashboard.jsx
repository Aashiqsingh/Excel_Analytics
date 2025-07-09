// src/components/Dashboard.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
  Paper,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Top AppBar */}
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Excel Analytics Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#F0F0FF',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <UploadFileIcon />
            </ListItemIcon>
            <ListItemText primary="Upload Files" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f9f9f9',
          p: 3,
          minHeight: '100vh',
          marginLeft: `${drawerWidth}px`,
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Welcome to the Dashboard
        </Typography>

        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography>
            Here you can upload Excel files, view analysis results, and generate charts.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography>
            You can extend this dashboard with graphs, recent uploads, and insights from AI.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
