import React from "react";
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
 
import {motion} from "framer-motion";

// Generic Page Skeleton
export const PageSkeleton = ({title = true, cards = 4, stats = true}) => {
  return (
    <Container maxWidth="xl" sx={{py: 3}}>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3}}
      >
        {title && (
          <Box sx={{mb: 4}}>
            <Skeleton variant="text" width={300} height={40} sx={{mb: 1}} />
            <Skeleton variant="text" width={500} height={24} />
          </Box>
        )}

        {stats && (
          <Grid container spacing={3} sx={{mb: 4}}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card elevation={2} sx={{borderRadius: 3}}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Skeleton variant="circular" width={56} height={56} />
                      <Skeleton
                        variant="rectangular"
                        width={60}
                        height={24}
                        sx={{borderRadius: 1}}
                      />
                    </Box>
                    <Skeleton
                      variant="text"
                      width={100}
                      height={32}
                      sx={{mb: 1}}
                    />
                    <Skeleton variant="text" width={120} height={20} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Grid container spacing={3}>
          {[...Array(cards)].map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 4}}>
                  <Skeleton
                    variant="text"
                    width={200}
                    height={28}
                    sx={{mb: 3}}
                  />
                  {[...Array(4)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{display: "flex", alignItems: "center", mb: 2}}
                    >
                      <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        sx={{mr: 2}}
                      />
                      <Box sx={{flex: 1}}>
                        <Skeleton
                          variant="text"
                          width="70%"
                          height={20}
                          sx={{mb: 0.5}}
                        />
                        <Skeleton variant="text" width="50%" height={16} />
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

// Table Skeleton
export const TableSkeleton = ({rows = 8, columns = 5}) => {
  return (
    <Paper elevation={0} sx={{borderRadius: 2, overflow: "hidden"}}>
      <Box sx={{p: 2, borderBottom: "1px solid #e0e0e0"}}>
        <Skeleton variant="text" width={200} height={28} />
      </Box>

      {/* Table Header */}
      <Box
        sx={{
          display: "flex",
          p: 2,
          borderBottom: "1px solid #e0e0e0",
          bgcolor: "#F6F6F6",
        }}
      >
        {[...Array(columns)].map((_, index) => (
          <Box key={index} sx={{flex: 1, mr: 2}}>
            <Skeleton variant="text" width="80%" height={20} />
          </Box>
        ))}
      </Box>

      {/* Table Rows */}
      {[...Array(rows)].map((_, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{display: "flex", p: 2, borderBottom: "1px solid #e0e0e0"}}
        >
          {[...Array(columns)].map((_, colIndex) => (
            <Box key={colIndex} sx={{flex: 1, mr: 2}}>
              {colIndex === 0 ? (
                <Box sx={{display: "flex", alignItems: "center"}}>
                  <Skeleton
                    variant="circular"
                    width={32}
                    height={32}
                    sx={{mr: 1}}
                  />
                  <Skeleton variant="text" width="60%" height={20} />
                </Box>
              ) : colIndex === columns - 1 ? (
                <Skeleton
                  variant="rectangular"
                  width={80}
                  height={24}
                  sx={{borderRadius: 1}}
                />
              ) : (
                <Skeleton variant="text" width="70%" height={20} />
              )}
            </Box>
          ))}
        </Box>
      ))}
    </Paper>
  );
};

// Form Skeleton
export const FormSkeleton = ({fields = 6}) => {
  return (
    <Card elevation={2} sx={{borderRadius: 3, maxWidth: 600, mx: "auto"}}>
      <CardContent sx={{p: 4}}>
        <Skeleton variant="text" width={200} height={32} sx={{mb: 3}} />

        {[...Array(fields)].map((_, index) => (
          <Box key={index} sx={{mb: 3}}>
            <Skeleton variant="text" width={120} height={20} sx={{mb: 1}} />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={56}
              sx={{borderRadius: 1}}
            />
          </Box>
        ))}

        <Box sx={{display: "flex", gap: 2, mt: 4}}>
          <Skeleton
            variant="rectangular"
            width={120}
            height={40}
            sx={{borderRadius: 1}}
          />
          <Skeleton
            variant="rectangular"
            width={100}
            height={40}
            sx={{borderRadius: 1}}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

// Chart Skeleton
export const ChartSkeleton = ({height = 300}) => {
  return (
    <Card elevation={2} sx={{borderRadius: 3}}>
      <CardContent sx={{p: 3}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Skeleton variant="text" width={200} height={28} />
          <Skeleton
            variant="rectangular"
            width={100}
            height={32}
            sx={{borderRadius: 1}}
          />
        </Box>

        <Box sx={{display: "flex", gap: 2, mb: 2}}>
          {[...Array(4)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={80}
              height={20}
              sx={{borderRadius: 1}}
            />
          ))}
        </Box>

        <Skeleton
          variant="rectangular"
          width="100%"
          height={height}
          sx={{borderRadius: 2}}
        />
      </CardContent>
    </Card>
  );
};

// Profile Skeleton
export const ProfileSkeleton = () => {
  return (
    <Container maxWidth="md" sx={{py: 3}}>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3}}
      >
        {/* Header */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 3,
            borderRadius: 3,
            background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
          }}
        >
          <Box sx={{display: "flex", alignItems: "center", gap: 3}}>
            <Skeleton variant="circular" width={120} height={120} />
            <Box sx={{flex: 1}}>
              <Skeleton variant="text" width={250} height={32} sx={{mb: 1}} />
              <Skeleton variant="text" width={300} height={20} sx={{mb: 2}} />
              <Skeleton
                variant="rectangular"
                width={100}
                height={24}
                sx={{borderRadius: 1}}
              />
            </Box>
          </Box>
        </Paper>

        {/* Content */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card elevation={2} sx={{borderRadius: 3}}>
              <CardContent sx={{p: 4}}>
                <Skeleton variant="text" width={150} height={28} sx={{mb: 3}} />

                {[...Array(5)].map((_, index) => (
                  <Box key={index} sx={{mb: 3}}>
                    <Skeleton
                      variant="text"
                      width={100}
                      height={20}
                      sx={{mb: 1}}
                    />
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={48}
                      sx={{borderRadius: 1}}
                    />
                  </Box>
                ))}

                <Box sx={{display: "flex", gap: 2, mt: 4}}>
                  <Skeleton
                    variant="rectangular"
                    width={120}
                    height={40}
                    sx={{borderRadius: 1}}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={100}
                    height={40}
                    sx={{borderRadius: 1}}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{borderRadius: 3, mb: 3}}>
              <CardContent sx={{p: 3}}>
                <Skeleton variant="text" width={120} height={24} sx={{mb: 2}} />
                {[...Array(4)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{display: "flex", alignItems: "center", mb: 2}}
                  >
                    <Skeleton
                      variant="circular"
                      width={24}
                      height={24}
                      sx={{mr: 2}}
                    />
                    <Skeleton variant="text" width="70%" height={20} />
                  </Box>
                ))}
              </CardContent>
            </Card>

            <Card elevation={2} sx={{borderRadius: 3}}>
              <CardContent sx={{p: 3}}>
                <Skeleton variant="text" width={100} height={24} sx={{mb: 2}} />
                {[...Array(3)].map((_, index) => (
                  <Box key={index} sx={{mb: 2}}>
                    <Skeleton
                      variant="text"
                      width="80%"
                      height={16}
                      sx={{mb: 0.5}}
                    />
                    <Skeleton variant="text" width="60%" height={14} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

// List Skeleton
export const ListSkeleton = ({
  items = 6,
  showAvatar = true,
  showActions = true,
}) => {
  return (
    <Paper elevation={0} sx={{borderRadius: 2}}>
      {[...Array(items)].map((_, index) => (
        <Box key={index}>
          <Box sx={{display: "flex", alignItems: "center", p: 2}}>
            {showAvatar && (
              <Skeleton
                variant="circular"
                width={48}
                height={48}
                sx={{mr: 2}}
              />
            )}

            <Box sx={{flex: 1}}>
              <Skeleton variant="text" width="60%" height={20} sx={{mb: 0.5}} />
              <Skeleton variant="text" width="80%" height={16} />
            </Box>

            {showActions && (
              <Box sx={{display: "flex", gap: 1}}>
                <Skeleton
                  variant="rectangular"
                  width={32}
                  height={32}
                  sx={{borderRadius: 1}}
                />
                <Skeleton
                  variant="rectangular"
                  width={32}
                  height={32}
                  sx={{borderRadius: 1}}
                />
              </Box>
            )}
          </Box>

          {index < items - 1 && (
            <Box sx={{borderBottom: "1px solid #e0e0e0", mx: 2}} />
          )}
        </Box>
      ))}
    </Paper>
  );
};

// Analytics Skeleton
export const AnalyticsSkeleton = () => {
  return (
    <Container maxWidth="xl" sx={{py: 3}}>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3}}
      >
        {/* Header */}
        <Box sx={{mb: 4}}>
          <Skeleton variant="text" width={200} height={40} sx={{mb: 1}} />
          <Skeleton variant="text" width={400} height={24} />
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{mb: 4}}>
          {[...Array(4)].map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Skeleton variant="circular" width={48} height={48} />
                    <Skeleton
                      variant="rectangular"
                      width={60}
                      height={24}
                      sx={{borderRadius: 1}}
                    />
                  </Box>
                  <Skeleton
                    variant="text"
                    width={80}
                    height={32}
                    sx={{mb: 1}}
                  />
                  <Skeleton variant="text" width={100} height={16} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Charts */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ChartSkeleton height={400} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ChartSkeleton height={400} />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};
