---
title: Contributing to Sui
---

Now that you understand Sui, consider helping the project. To contribute to Sui, ensure you have the latest version of the codebase.

To clone the repository, run the following:
```bash
git clone https://github.com/mystenlabs/sui.git
cd sui
cargo build --all --all-targets
cargo test
```

See [Install Sui](../build/install.md) for installation instructions and our [end-to-end tutorial](../explore/tutorials.md) to work with Sui immediately.

## Pull requests

To submit your pull request:

1. Fork the `sui` repository and create your branch from `main`.
2. If you have added code that should be tested, add unit tests.
3. If you have made changes to APIs, update the relevant documentation, and build and test the developer site.
4. Verify and ensure that the test suite passes.
5. Make sure your code passes both linters.
6. Complete the Contributor License Agreement (CLA), if you haven't already done so.
7. Submit your pull request.

## Further reading

* Learn [about Mysten Labs](https://mystenlabs.com/) the company on our public site.
* Read the [Sui Smart Contract Platform](../../paper/sui.pdf) white paper.
* Implementing [logging](../contribute/observability.md) in Sui to observe the behavior of your development.
* Find related [research papers](../contribute/research-papers.md).
* See and adhere to our [code of conduct](../contribute/code-of-conduct.md).