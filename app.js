const { App } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
});

app.command("/zendesk", async ({ command, ack, say }) => {
    try {
      await ack();
      say("Como usar o bot do Zendesk:\n - Para visualizar informações de um ticket: Marque @Zenbot2 e o número do ticket. Exemplo: @Zenbot #121212 ");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

app.message(async ({ message, say }) => {
    console.log(message.text);
  });

(async () => {
  const port = 3000
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();