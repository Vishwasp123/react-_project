import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import CommonButtons from "./CommonButton";
import { useNavigate } from "react-router-dom";
const data = [
  {
    label: "Frequency",
    myYoga: "Daily/ thrice a week ",
    traditional: "Weekly/Bi-weekly",
  },
  {
    label: "Cost",
    myYoga: "Affordable ($5 -$20 per session) ",
    traditional: "$100–$200 per session ",
  },
  {
    label: "Impact",
    myYoga: "Gradual, long-term ",
    traditional: "Immediate & lifelong benefits",
  },
  {
    label: "Place",
    myYoga: "100% Online, train anywhere ",
    traditional: "Clinic/Online (varies)",
  },
  {
    label: "Availability",
    myYoga: "Instant access, 24/7 ",
    traditional: "Appointment-based",
  },
  {
    label: "Focus",
    myYoga: "Healing + Fitness Training ",
    traditional: "Healing from mental ailments",
  },
]; 
const Comparison = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md")); // >=900px
  const navigate = useNavigate();
    const handelConsulation = (clickedOn) => {
    if (clickedOn === "calendly") {
      navigate("/free_consultance");
    } else if (clickedOn === "rozerpay") {
      navigate("/book-now");
    }
  };

  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            marginTop: "2rem",
            fontSize: "40px",
            fontWeight: "bold",
            color: "#1470AF",
            alignSelf: "baseline",
            fontFamily: "Instrument sans",
          }}
        >
          Royal Mindfulness vs Traditional Training
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0px",
            margin: { xs: "1.5rem 0", md: "3rem" }, // Mobile: 0 left/right, Desktop: 3rem all sides
            flexWrap: "nowrap",
          }}
        >
          {/* Feature Card – only on desktop >=900px */}
          {isMd && (
            <Card
              sx={{
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                width: "300px",
                marginRight: "-20px",
                opacity: 0.9,
                transform: "scale(0.95)",
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontFamily: "lato",
                    fontSize: "18px",
                  }}
                >
                  Feature
                </Typography>
              </CardContent>
              <Divider />
              {data.map((item, index) => (
                <CardContent key={index}>
                  <Typography
                    sx={{
                      marginTop: "7px",
                      fontFamily: "lato",
                      fontSize: "16px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </CardContent>
              ))}
            </Card>
          )}
          {/* Royal Card – always visible */}
          <Card
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              width: "300px",
              backgroundColor: "#CBE6FF",
              zIndex: 2,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary"
                align="center"
                sx={{
                  fontFamily: "lato",
                  fontSize: "18px",
                }}
              >
                Royal Mindfulness
              </Typography>
            </CardContent>
            <Divider />
            {data.map((item, index) => (
              <CardContent key={index}>
                <Typography
                  align="center"
                  color="primary"
                  sx={{
                    marginTop: "7px",
                    fontFamily: "lato",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {item.myYoga}
                </Typography>
              </CardContent>
            ))}
          </Card>
          {/* Traditional Card – always visible */}
          <Card
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              width: "300px",
              marginLeft: "-20px",
              opacity: 0.9,
              transform: "scale(0.95)",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontFamily: "lato",
                  fontSize: "18px",
                }}
              >
                Traditional Personal Training
              </Typography>
            </CardContent>
            <Divider />
            {data.map((item, index) => (
              <CardContent key={index}>
                <Typography
                  sx={{
                    marginTop: "7px",
                    fontFamily: "lato",
                    fontSize: "16px",
                  }}
                >
                  {item.traditional}
                </Typography>
              </CardContent>
            ))}
          </Card>
        </Box>
        {/* Buttons Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "start",
            }}
          >
            <CommonButtons
              label="Book a free consultation"
              height="50px"
              sx={{ backgroundColor: "#1470AF", color: "white" }}
              variant="contained"
              onClick={() =>handelConsulation("calendly")}
            />
            <CommonButtons
              label="Hire Trainer"
              width="150px"
              height="50px"
              sx={{ backgroundColor: "#1470AF", color: "white" }}
              variant="contained"
              onClick={() =>handelConsulation("rozerpay") }
            />
          </Box>
        </Box>
      </div>
      {/* Background Wave */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          lineHeight: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* wave SVG commented */}
      </Box>
    </>
  );
};

export default Comparison;