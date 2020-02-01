module.exports = {
  publishCommand: ({ defaultCommand }) => `${defaultCommand} --access public`,
  afterPublish: ({ exec, version }) => {
    exec(`cowsay ${version} released`)
  },
  mergeStrategy: { toSameBranch: ["master"] }
};
