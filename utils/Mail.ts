import emailjs, { init } from "emailjs-com";
init("user_zdO7SqNAzUeW1bl8KtMhn");

export const useEmailJs = () => ({
    sendEmail: async (form: { name: string; subject: string; email: string; message: string }) => {
        return await emailjs.send("service_88wvqn9", "template_nulphu2", form);
    },
});
