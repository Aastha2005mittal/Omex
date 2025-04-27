const aiService = require("../services/ai.service")

const getReview = async (req, res) => {
    try {
        const code = req.body.prompt;

        if (!code) {
            return res.status(400).send("Prompt is required");
        }

        const response = await aiService.generateReview(code);
        res.send(response);
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).send("An error occurred while processing your request");
    }
}

const getCode = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        if (!prompt) {
            return res.status(400).send("Prompt not found");
        }
        const response = await aiService.generateCode(prompt);
        res.send(response);
    } catch (error) {
        console.error("Error in getCode:", error);
        res.status(500).send("An error occurred while processing your request");
    }
}

const getComplexity = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        if (!prompt) {
            return res.status(400).send("Prompt not found");
        }
        const response = await aiService.generateComplexity(prompt);
        res.send(response);
    } catch (error) {
        console.error("Error in getComplexity:", error);
        res.status(500).send("An error occurred while processing your request");
    }
}

const compareCode = async (req, res) => {
    try {
        const { code1, code2, language } = req.body;
        if (!code1 || !code2) {
            return res.status(400).send("Both code snippets are required");
        }

        const response = await aiService.compareCode(code1, code2, language);
        res.send(response);
    } catch (error) {
        console.error("Error in compareCode:", error);
        res.status(500).send("An error occurred while comparing the code");
    }
}

module.exports = { getReview, getCode, getComplexity, compareCode }