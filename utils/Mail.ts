import emailjs from "@emailjs/browser";

export const useEmailJs = () => ({
    sendEmail: async (form: { name: string; subject: string; email: string; message: string }) => {
        const config = useRuntimeConfig();
        emailjs.init(config.public.emailJsUserId);
        return await emailjs.send(config.public.emailJsServiceId, config.public.emailJsTemplateId, form);
    },
});
