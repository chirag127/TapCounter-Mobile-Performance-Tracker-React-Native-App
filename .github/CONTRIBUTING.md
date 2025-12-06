# 🤝 Contributing to AtomicPulse-Interactive-Counter-React-Native-App

As the Apex Technical Authority, we welcome contributions that enhance the robustness, performance, and architectural integrity of this project. All contributions must adhere to the **Zero-Defect, High-Velocity, Future-Proof** philosophy.

## 1. Code of Conduct

This project adheres to the Contributor Covenant, Version 2.1. All contributors are expected to uphold a professional, inclusive, and respectful environment. Report any unacceptable behavior via GitHub Issues.

## 2. The Apex Branching Strategy

We utilize a simplified Git Flow optimized for velocity, emphasizing feature isolation and atomic commits.

1.  **`main`:** Production-ready, stable code. Always passing CI/CD checks.
2.  **`develop`:** The primary integration branch. Features are merged here for integration testing before promotion to `main`.
3.  **Feature Branches:** All new work MUST originate from `develop` and be named descriptively (e.g., `feature/state-optimization` or `fix/crash-on-cold-start`). Branches should be prefixed with `feature/`, `fix/`, `refactor/`, or `chore/`.

**Process:**

mermaid
graph TD
    A[Start: Develop Branch] --> B(Create Feature Branch: feature/my-work);
    B --> C(Implement & Commit Locally);
    C --> D(Push Branch);
    D --> E{Create Pull Request: feature/my-work -> develop};
    E --> F[CI/CD Verification];
    F -- Fail --> B;
    F -- Pass --> G(Review & Merge to develop);
    G --> H(Periodic Merge to main);


## 3. Development Workflow & Linting Standards

### A. Environment Setup
Before making changes, ensure your local environment replicates the CI configuration:

bash
# 1. Clone the repository
git clone https://github.com/chirag127/AtomicPulse-Interactive-Counter-React-Native-App.git
cd AtomicPulse-Interactive-Counter-React-Native-App

# 2. Install dependencies using uv (or npm/yarn if appropriate for RN context)
npm install # Assuming standard React Native setup
# Ensure Biome/ESLint is configured locally to match .eslintrc/.biome settings


### B. Commit Hygiene
All commits must be atomic and descriptive. We strongly encourage using Conventional Commits, although the primary requirement is clarity.

*   **GOOD:** `feat: Add local storage persistence for counter value`
*   **BAD:** `update file`

### C. Code Quality Enforcement (TypeScript/Biome)

1.  **Lint & Format:** Run the linter/formatter *before* committing. The CI pipeline will fail if static analysis errors are present.
    bash
    # Check linting and formatting adherence
npm run lint
# Automatically fix formatting issues
npm run format
    
2.  **Testing:** All new features or bug fixes **MUST** include corresponding unit tests written using Vitest. Ensure test coverage increases, adhering to the standards enforced by Codecov checks in CI.
    bash
    # Run unit tests
npm run test:unit
    

## 4. Submitting a Pull Request (PR)

Every PR must be complete and actionable:

1.  **Branch Target:** PRs must target the `develop` branch unless otherwise specified by a maintainer.
2.  **Template Use:** Fill out the provided **`PULL_REQUEST_TEMPLATE.md`** completely.
3.  **Verification:** Ensure all local tests pass and the code adheres to the principles outlined in `AGENTS.md` (especially architectural purity).
4.  **Review:** Be available for code review feedback. Address all comments constructively.

## 5. Architectural Principles (Mandatory Adherence)

Contributors must internalize the following architectural mandates for this React Native project:

*   **SOLID/DRY/YAGNI:** Apply these principles rigorously, particularly in state management logic.
*   **State Management:** Prefer explicit context/hook-based patterns over implicit global state solutions unless performance profiling necessitates an alternative.
*   **Cross-Platform Parity:** Verify functionality works correctly on both iOS and Android emulators/simulators unless the change is explicitly platform-specific (and documented as such).

## 6. Seeking Guidance

If you encounter architectural ambiguity or require clarification on the project's future direction, consult the **`AGENTS.md`** file for the guiding principles, or open a discussion under the `support` label in the Issues tracker.