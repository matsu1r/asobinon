import * as functions from "firebase-functions";
import { MailJet } from "../lib/mailjet";
import { AdminConfig } from "../models/admin-config";

const adminConfig = functions.config() as AdminConfig;

const contactWithMailjet = functions
  .region("asia-northeast1")
  .https.onRequest(async (request, response: any) => {
    const secret = request.headers.authorization as string;

    if (secret !== adminConfig.docusaurus.auth) {
      functions.logger.error("Detected access with invalid token");
      return response.status(401).json({
        message: "Invalid token",
      });
    }

    if (request.method !== "POST") {
      return response.status(405).json({
        message: `Please use POST method`,
      });
    }

    const body = await request.body;
    if (Object.keys(body).length === 0) {
      return response.status(500).json({
        message: `Please specify body`,
      });
    }
    const parsedBody = JSON.parse(body);

    functions.logger.info("Posting contact mail");
    let options = {
      title: `新しい問い合わせ: ${parsedBody.title ?? "タイトル不明"}`,
      content: `${
        parsedBody.text ?? "本文なし"
      }\n\n---\n返信用メールアドレス: ${
        parsedBody.email.length > 0 ? parsedBody.email : "指定なし"
      }`,
      from: adminConfig.mail.sender ?? "functions-from-not-set@ima.icu",
      fromName: "Markdown Gaming 運営チーム・お問い合わせ部門",
      to: adminConfig.mail.to ?? "sasigume+mdtonotset@gmail.com",
    };

    await MailJet(options)
      .then(() => {
        functions.logger.info("Contact mail is successfully sent");
        return response.status(200).json({
          message: "Contact mail is successfully sent",
        });
      })
      .catch((e: any) => {
        functions.logger.error(e);
        return response.status(500).json({
          message: `Stringified error: ${JSON.stringify(e)}`,
        });
      });
  });

exports.contactWithMailjet = contactWithMailjet;
