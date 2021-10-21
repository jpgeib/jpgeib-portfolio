//Home Page Styling

const homeStyle = {
    bio: {
        container: {
            marginBottom: "3%"
        },
        text: {
            fontSize: "24px",
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            color: "white"
        }
    },
    social: {
        container: {
            marginTop: "15%",
            marginLeft: "25%"
        },
        text: {
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            color: "white"
        },
        icon: {
            color: "white"
        }
    },
    contact: {
        header: {
            marginTop: "20%",
            marginLeft: "25%",
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            color: "white"
        },
        phone: {
            marginLeft: "15%",
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            color: "white"
        },
        email: {
            marginLeft: "15%",
            marginBottom: "30%",
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            color: "white"
        }
    }
};

//Webdev Portfolio Page Project Section Styling

const projectStyle = {
    computer: {
        general: {
            page: {
                marginTop: "3%"
            },
            headerContainer: {
                margin: "0 auto",
                width: "70%"
            },
            header: {
                fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
            },
            subheader: {
                fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                marginBottom: "1%"
            },
            container: {
                backgroundColor: "rgb(180, 74, 70)",
                margin: "0 auto",
                width: "70%",
                padding: "1%",
                overflowY: "auto",
                height: "715px"
            }
        },
        subSection: {
            linkHeader: {
                color: "white",
                fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
            },
            listItem: {
                color: "white",
                fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
            },
            container: {
                marginTop: "0",
                border: "solid white 2px"
            },
            header: {
                color: "white",
                fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                marginBottom: "5%"
            },
            link: {
                color: "white",
                fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                textDecorationLine: "underline"
            }
        }
    },
    tablet: {

    },
    mobile: {

    }
};

//Webdev Portfolio Page Skills Section Styling

const skillStyle = {
    computer: {

    },
    tablet: {

    },
    mobile: {

    }
};

//Blog Page Styling

const blogStyle = {

};

//Aggregate Styling

export const webStyle = {
    homeStyle,
    projectStyle,
    skillStyle,
    blogStyle
};