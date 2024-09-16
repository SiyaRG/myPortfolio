const sendEmail = async (service, template, user, params) => {
    var data = {
        service_id: service,
        template_id: template,
        user_id: user,
        template_params: { ...params }
    };
    try {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            const message = await res.text();
            throw new Error(
                `Email send failed. Status: ${res.status} Message: ${message}`
            );
        }
    } catch (error) {
        throw error;
    }
};

module.exports = { sendEmail };
