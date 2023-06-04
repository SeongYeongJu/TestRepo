const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
    res.send("ok");
    console.log("1");
});

router.get("/items", (req, res) => {
    let items = [
        {
            id: "0",
            title: "Beats Studio3 wireless",
            description: "Experience your\nmusic like never before.",
            promotionText:
                "$60 Apple Music gift card with purchase of select Beats products.*",
            price: "$299.95",
            imageURL:
                "https://drive.google.com/uc?id=1JIlpSAxPMZT0n9HN65s94C8EL1ROk_Dq",
        },
        {
            id: "1",
            title: "Beats Pill",
            description: "Portable Wireless Speaker",
            promotionText:
                "$60 Apple Music gift card with purchase of select Beats products.*",
            price: "$299.95",
            imageURL:
                "https://drive.google.com/uc?id=1TeBtUk7s1tjWzr0djDx_o_Gnhaevzxgj",
        },
        {
            id: "2",
            title: "Beatsˣ",
            description:
                "Up to 8 hours of battery life With Fast Fuel, a 5-minute charge = 2 hours of playback",
            promotionText: "",
            price: "$299.95",
            imageURL:
                "https://drive.google.com/uc?id=1RoJvb0fp3h_RjgYlooBecevlcQ8AQQKE",
        },
        {
            id: "3",
            title: "Beatsˣ",
            description:
                "Up to 8 hours of battery life With Fast Fuel, a 5-minute charge = 2 hours of playback",
            promotionText: "",
            price: "$199.95",
            imageURL:
                "https://drive.google.com/uc?id=1SxWTqypwVWGxNR_kjMFG3oGlQZ1KfJWQ",
        },
        {
            id: "4",
            title: "Beatsˣ",
            description:
                "Up to 8 hours of battery life With Fast Fuel, a 5-minute charge = 2 hours of playback",
            promotionText: "",
            price: "$199.95",
            imageURL:
                "https://drive.google.com/uc?id=1_jK3iGc0xjr5TCeyieqpZyKzjqnD5ihN",
        },
        {
            id: "5",
            title: "Beatsˣ",
            description:
                "Up to 8 hours of battery life With Fast Fuel, a 5-minute charge = 2 hours of playback",
            promotionText: "",
            price: "$999.95",
            imageURL:
                "https://drive.google.com/uc?id=1804pVGwXi-eu3j83W9zo0c4xSwfAksPk",
        },
        {
            id: "6",
            title: "Beatsˣ",
            description:
                "Up to 8 hours of battery life With Fast Fuel, a 5-minute charge = 2 hours of playback",
            promotionText: "",
            price: "$99.95",
            imageURL:
                "https://drive.google.com/uc?id=1HRteiym-Gq91jYw0-DwYI8k32KMYH4_c",
        },
        {
            id: "7",
            title: "Beatsˣ",
            description:
                "Up to 8 hours of battery life With Fast Fuel, a 5-minute charge = 2 hours of playback",
            promotionText: "",
            price: "$299.95",
            imageURL:
                "https://drive.google.com/uc?id=1O7UvbXStI_yKS1imzGBTq-ZnMAlm74Ec",
        },
    ];
    res.status(200).json(items);
});

module.exports = router;
