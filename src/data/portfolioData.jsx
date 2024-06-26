import cd_image from "../assets/images/chamber_dashboard.png";

import weather_dashboard from "../assets/images/weather_dashboard.png";
import groove_guide_one from "../assets/images/groove_guide_1.png";
import groove_guide_two from "../assets/images/groove_guide_database.png";
import wp_cat_dropdown from "../assets/images/wp_cat_dropdown.png";
import jate from "../assets/images/jate.png";

const projects = [
    {
        title: "Chamber Dashboard",
        description: "Business Management plugins for WordPress",
        image: cd_image,
        githubLink: "https://github.com/orgs/Chamber-Dashboard/repositories"
    },
    {
        title: "WP Category Dropdown",
        description: "Category dropdown plugin for WordPress",
        image: wp_cat_dropdown,
        githubLink: "https://github.com/cguntur/wp-category-dropdown"
    },
    {
        title: "Groove Guide",
        description: "Cool site to get underrated artists info from Spotify",
        image: groove_guide_one,
        githubLink: "https://github.com/Chadoyek/Groove-Guide-Project-1",
    },
    {
        title: "Groove Guide Database",
        description: "Database for the Groove Guide website that allows the admin to add members",
        image: groove_guide_two,
        githubLink: "https://github.com/cguntur/groove_guide__database",
    },
    {
        title: "JATE",
        description: "A text editor which is a single page application",
        image: jate,
        githubLink: "https://github.com/cguntur/pwa_jate_editor",
    },
    {
        title: "Weather Dashboard",
        description: "Simple JavaScript program to show the current and five day weather forecast of a selected city",
        image: weather_dashboard,
        githubLink: "https://github.com/cguntur/weather_dashboard",
    }
  ];

export default projects;
