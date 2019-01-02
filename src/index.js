import React from 'react'

class ExpoSnack extends React.PureComponent {

  static defaultProps = {
    platform: 'ios',
    theme: 'dark',
    preview: true,
    height: 505
  }

  componentDidMount() {
    this.updateIframeContent();
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateIframeContent();
  }

  updateIframeContent() {
    const { id, platform, preview, theme, height } = this.props;

    const iframe = this.iframeNode;

    let doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    const expoScript = `<div data-snack-id="${id}" data-snack-platform="${platform}" data-snack-preview="${preview}" data-snack-theme="${theme}" style="overflow:hidden;background:#${theme === 'dark' ? '212733' : 'fafafa'};border:1px solid rgba(0,0,0,.16);border-radius:4px;height:${height}px;width:100%"></div><script async src="https://snack.expo.io/embed.js"></script>`;
    const iframeHtml = `<html><head><base target="_parent"></head><body>${expoScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }

  render() {
    const { id, height } = this.props;

    return (
      <iframe
        ref={(n) => { this.iframeNode = n; }}
        width="100%"
        height={`${height + 18}px`}
        frameBorder={0}
        id={`expo-snack-${id}`}
      />
    );
  }
}

export default ExpoSnack
