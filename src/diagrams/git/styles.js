const getStyles = (options) =>
  `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7]
    .map(
      (i) =>
        `
        .branch-label${i} { fill: ${options['gitBranchLabel' + i]}; }
        .commit${i} { stroke: ${options['git' + i]}; fill: ${options['git' + i]}; }
        .commit-highlight${i} { stroke: ${options['gitInv' + i]}; fill: ${options['gitInv' + i]}; }
        .label${i}  { fill: ${options['git' + i]}; }
        .arrow${i} { stroke: ${options['git' + i]}; }
        `
    )
    .join('\n')}

  .branch {
    stroke-width: 1;
    stroke: black;
    stroke-dasharray: 2;
  }
  .commit-labels { font-size: 10px; fill: ${options.textColor};}
  .tag-label { font-size: 10px; fill: ${options.tagLabelColor};}
  .tag-label-bkg { fill: ${options.tagLabelBkg}; }
  .tag-hole { fill: ${options.tagLabelColor}; opacity: 0.5; stroke-linejoin: round;}

  .commit-merge {
    stroke: ${options.primaryColor};
    fill: ${options.primaryColor};
  }
  .commit-reverse {
    stroke: ${options.primaryColor};
    fill: ${options.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${options.primaryColor};
    fill: ${options.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  }
`;

export default getStyles;
