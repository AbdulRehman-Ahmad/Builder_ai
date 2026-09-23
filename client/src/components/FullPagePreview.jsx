import React, { useState, useMemo } from 'react';
import { detectDependencies } from '../utils/sandpackUtils';
import SandpackErrorMonitor from './SandpackErrorMonitor';
import {
  SandpackLayout,
  SandpackPreview,
  SandpackProvider
} from '@codesandbox/sandpack-react';

const FullPagePreview = ({ files }) => {
  const [showErrorOverlay, setShowErrorOverlay] = useState(true);

  // Convert liveFiles to Sandpack format
  const sandpackFiles = useMemo(() => {
    if (!files) return {};

    const spFiles = {};

    for (const [path, content] of Object.entries(files)) {
      spFiles[path] = {
        code: content
      };
    }

    // Make sure Tailwind CDN is loaded inside the preview iframe
    const indexPath = '/public/index.html';

    if (spFiles[indexPath]) {
      let html = spFiles[indexPath].code;

      if (!html.includes('cdn.tailwindcss.com')) {
        html = html.replace(
          '</head>',
          `
          <script src="https://cdn.tailwindcss.com"></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
          </head>
          `
        );
      }

      spFiles[indexPath] = {
        code: html
      };
    }

    return spFiles;
  }, [files]);

  // Detect dependencies from import statements
  const dependencies = useMemo(() => {
    if (!files) return {};
    return detectDependencies(files);
  }, [files]);

  return (
    <div className="h-screen w-screen">
      <SandpackProvider
        template="react"
        files={sandpackFiles}
        customSetup={{
          dependencies
        }}
        options={{
            externalResources: [
               "https://cdn.tailwindcss.com",
               "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
            ],
            logLevel: 0,
         }}
        className="h-full w-full"
      >
        <SandpackErrorMonitor
          onErrorChange={setShowErrorOverlay}
        />

        <SandpackLayout className="h-screen w-screen border-none! bg-transparent!">
         <SandpackPreview
            showNavigator={false}
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
            showSandpackErrorOverlay={showErrorOverlay}
            className="h-screen w-screen"
         />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default FullPagePreview;