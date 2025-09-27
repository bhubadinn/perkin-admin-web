{
  /* Content Grid */
}
<Grid container spacing={3}>
  {/* User Information Card */}
  <Grid item xs={12} md={6}>
    <motion.div
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.6, delay: 0.4}}
    >
      <Card elevation={2} sx={{borderRadius: 3, height: "100%"}}>
        <CardContent sx={{padding: 4}}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            color="#000000"
            sx={{mb: 3}}
          >
            User Information
          </Typography>
          <List sx={{padding: 0}}>
            <ListItem sx={{paddingY: 2}}>
              <ListItemIcon>
                <Avatar sx={{width: 40, height: 40, bgcolor: "#A2D5C6"}}>
                  {user?.name?.[0]}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary="Name"
                secondary={user?.name}
                sx={{ml: 2}}
              />
            </ListItem>
            <ListItem sx={{paddingY: 2}}>
              <ListItemIcon>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "#CFFFE2",
                    color: "#000000",
                  }}
                >
                  @
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary="Email"
                secondary={user?.email}
                sx={{ml: 2}}
              />
            </ListItem>
            <ListItem sx={{paddingY: 2}}>
              <ListItemIcon>
                <Avatar sx={{width: 40, height: 40, bgcolor: "#A2D5C6"}}>
                  <Star />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary="Role"
                secondary={
                  <Chip
                    label={user?.role}
                    size="small"
                    sx={{
                      bgcolor: "#A2D5C6",
                      color: "#000000",
                      textTransform: "capitalize",
                      mt: 0.5,
                    }}
                  />
                }
                sx={{ml: 2}}
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{padding: 3, paddingTop: 0}}>
          <Button
            variant="outlined"
            startIcon={<Settings />}
            fullWidth
            sx={{
              borderColor: "#A2D5C6",
              color: "#A2D5C6",
              "&:hover": {
                borderColor: "#A2D5C6",
                backgroundColor: "rgba(162, 213, 198, 0.1)",
              },
            }}
          >
            Edit Profile
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  </Grid>

  {/* Recent Activities */}
  <Grid item xs={12} md={6}>
    <motion.div
      initial={{opacity: 0, x: 20}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.6, delay: 0.5}}
    >
      <Card elevation={2} sx={{borderRadius: 3, height: "100%"}}>
        <CardContent sx={{padding: 4}}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            color="#000000"
            sx={{mb: 3}}
          >
            Recent Activities
          </Typography>
          <List sx={{padding: 0}}>
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                }}
              >
                <ListItem sx={{paddingY: 2}}>
                  <ListItemIcon>
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor:
                          activity.type === "success"
                            ? "#A2D5C6"
                            : activity.type === "warning"
                            ? "#FFA726"
                            : "#CFFFE2",
                      }}
                    >
                      {activity.type === "success" && <CheckCircle />}
                      {activity.type === "warning" && <Warning />}
                      {activity.type === "info" && <Info />}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={activity.action}
                    secondary={activity.time}
                    sx={{ml: 2}}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </CardContent>
        <CardActions sx={{padding: 3, paddingTop: 0}}>
          <Button
            variant="outlined"
            startIcon={<Analytics />}
            fullWidth
            sx={{
              borderColor: "#A2D5C6",
              color: "#A2D5C6",
              "&:hover": {
                borderColor: "#A2D5C6",
                backgroundColor: "rgba(162, 213, 198, 0.1)",
              },
            }}
          >
            View All Activities
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  </Grid>
</Grid>;
