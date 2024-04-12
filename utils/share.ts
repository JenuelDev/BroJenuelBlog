export const useShareFunction = () => ({
    share: (social: string) => {
        let url = "https://brojenuel.com" + window.location.pathname;
        if (social == "facebook") {
            const navUrl =
                "https://www.facebook.com/sharer/sharer.php?u=" + url;
            window.open(navUrl, "_blank");
            return;
        }

        if (social == "twitter") {
            const navUrl = "https://twitter.com/intent/tweet?text=" + url;
            window.open(navUrl, "_blank");
            return;
        }

        if (social == "linkedin") {
            const navUrl =
                "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
            window.open(navUrl, "_blank");
            return;
        }

        if (social == "copy") {
            navigator.clipboard.writeText(url).then(() => {
                alert("Link Copied.");
            });
            return;
        }
    },
});
