"use client"
// components/VoiceglowWidget.tsx
import { useEffect } from 'react';

const VoiceglowWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.innerHTML = `
      (function() {
        window.VG_CONFIG = {
          ID: "223wztcqig80n35u",
          region: 'na', // 'eu' or 'na' corresponding to Europe and North America
          render: 'popup', // 'popup' or 'full-width'
          stylesheets: [
            // Base Voiceglow CSS 
            "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/styles.css",
            // Add your custom CSS stylesheets, Can also add relative URL ('/public/your-file.css)
          ],
        }
        var VG_SCRIPT = document.createElement("script");
        VG_SCRIPT.src = "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/vg_bundle.js";
        document.body.appendChild(VG_SCRIPT);
      })()
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER">
      {/* Here is where Voiceglow renders the widget. */}
      {/* Set render to 'full-width' then adjust the width and height to 500px (for example) to render the chatbot itself without the popup. */}
    </div>
  );
};

export default VoiceglowWidget;
