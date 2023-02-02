######### MacOS only. #########

cd Desktop/wdc-template
touch $HOME/.zshrc
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install --lts
nvm use --lts
npm i -g npm corepack npm-check-updates gatsby-cli
npm i
echo "\n\nAll set!\n"
