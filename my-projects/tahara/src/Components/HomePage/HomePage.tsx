import { Container, Divider, Paper, Stack } from "@mui/material";
import ActionsMenu from "./ActionsMenu";
import { EventType } from "../../Types and Interfaces/Event";
import AddEvent from "./AddEvent";
import Calendar from "./Calender";

const PaperStyle: React.CSSProperties = {
    marginTop: "7.5vh",
    textAlign: 'center',
    height: "85vh",
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
                            {/* <Typography letterSpacing={1.5} marginBottom={2} variant="h4">הוספת אירוע חדש</Typography> */}
                            <Divider />
                            <Calendar isOnaNeeded={LastEvent === "H.T."} />
                            <AddEvent lastEvent={LastEvent}/>
                        </div>
                    </Paper>
                </Container>
            </Stack >
        </>
    );
};

export default HomePage;