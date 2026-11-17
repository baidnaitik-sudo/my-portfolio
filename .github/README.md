# GitHub Configuration & Automation

This folder contains GitHub configurations and CI/CD pipelines for your portfolio:

- **`.github/workflows/deploy.yml`**: Automatically builds and deploys your portfolio to GitHub Pages whenever you push to the `main` branch.
- **`.github/workflows/ci.yml`**: Automatically verifies builds on pushes and pull requests.

## How to Deploy on GitHub Pages:
1. Push your repository to GitHub.
2. In your GitHub repository, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, choose **GitHub Actions**.
4. Every time you push changes to `main`, GitHub Actions will build your site and deploy it for free!
