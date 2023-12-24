import { Container, Paper, Stack, Typography } from "@mui/material";
import ActionsMenu from "./ActionsMenu";
import { EventType } from "../../Types and Interfaces/Event";
import AddPeriodEvent from "./AddPeriodEvent";
import AddHTEvent from "./AddHTEvent";
import Calendar from "./Calender";

const PaperStyle: React.CSSProperties = {
    marginTop: "4rem",
    textAlign: 'center',
    height: "80vh",
    backgroundColor: "#fffffff7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const PaperContentStyle: React.CSSProperties =
{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    height: "90%",
    width: "90%"
};

interface HomePageComponentType {
    LastEvent: EventType;
}

const HomePage: React.FC<HomePageComponentType> = ({ LastEvent }) => {
    return (
        <>
            <div id="actions-menu">
                <ActionsMenu />
            </div>

            <Stack>
                <Container>
                    <Paper variant="elevation" elevation={8} style={PaperStyle}>
                        <div style={PaperContentStyle}>
                            <Typography variant="h3">הוספת אירוע חדש</Typography>
                            <Calendar />
                            {LastEvent === "H.T." ? <AddPeriodEvent /> : <AddHTEvent />}
                        </div>
                    </Paper>
                </Container>
            </Stack >
        </>
    );
};

export default HomePage;