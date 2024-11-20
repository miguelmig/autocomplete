const completion: Fig.Spec = {
  name: "uv",
  description: "An extremely fast Python package manager",
  subcommands: [
    {
      name: "run",
      description: "Run a command or script",
      options: [
        {
          name: "--extra",
          description: "Include optional dependencies from the specified extra name",
          exclusiveOn: [
            "--all-extras",
          ],
          isRepeatable: true,
          args: {
            name: "extra",
            isOptional: true,
          },
        },
        {
          name: "--group",
          description: "Include dependencies from the specified dependency group",
          exclusiveOn: [
            "--only-group",
          ],
          isRepeatable: true,
          args: {
            name: "group",
            isOptional: true,
          },
        },
        {
          name: "--no-group",
          description: "Exclude dependencies from the specified dependency group",
          isRepeatable: true,
          args: {
            name: "no_group",
            isOptional: true,
          },
        },
        {
          name: "--only-group",
          description: "Only include dependencies from the specified dependency group",
          exclusiveOn: [
            "--group",
          ],
          isRepeatable: true,
          args: {
            name: "only_group",
            isOptional: true,
          },
        },
        {
          name: "--env-file",
          description: "Load environment variables from a `.env` file",
          isRepeatable: true,
          args: {
            name: "env_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--with",
          description: "Run with the given packages installed",
          isRepeatable: true,
          args: {
            name: "with",
            isOptional: true,
          },
        },
        {
          name: "--with-editable",
          description: "Run with the given packages installed as editables",
          isRepeatable: true,
          args: {
            name: "with_editable",
            isOptional: true,
          },
        },
        {
          name: "--with-requirements",
          description: "Run with all packages listed in the given `requirements.txt` files",
          isRepeatable: true,
          args: {
            name: "with_requirements",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--reinstall-package",
          description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "reinstall_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--refresh-package",
          description: "Refresh cached data for a specific package",
          isRepeatable: true,
          args: {
            name: "refresh_package",
            isOptional: true,
          },
        },
        {
          name: "--package",
          description: "Run the command in a specific package in the workspace",
          exclusiveOn: [
            "--all-packages",
          ],
          isRepeatable: true,
          args: {
            name: "package",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use for the run environment",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--all-extras",
          description: "Include all optional dependencies",
          exclusiveOn: [
            "--extra",
          ],
        },
        {
          name: "--no-all-extras",
        },
        {
          name: "--dev",
          description: "Include the development dependency group",
        },
        {
          name: "--no-dev",
          description: "Omit the development dependency group",
        },
        {
          name: ["-m", "--module"],
          description: "Run a Python module",
          exclusiveOn: [
            "-s",
            "--script",
          ],
        },
        {
          name: "--only-dev",
          description: "Only include the development dependency group",
          exclusiveOn: [
            "--no-dev",
          ],
        },
        {
          name: "--no-editable",
          description: "Install any editable dependencies, including the project and any workspace members, as non-editable",
        },
        {
          name: "--no-env-file",
          description: "Avoid reading environment variables from a `.env` file",
        },
        {
          name: "--isolated",
          description: "Run the command in an isolated virtual environment",
        },
        {
          name: "--no-sync",
          description: "Avoid syncing the virtual environment",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--locked",
          description: "Assert that the `uv.lock` will remain unchanged",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--frozen",
          description: "Run without updating the `uv.lock` file",
          exclusiveOn: [
            "--locked",
          ],
        },
        {
          name: ["-s", "--script"],
          description: "Run the given path as a Python script",
          exclusiveOn: [
            "-m",
            "--module",
          ],
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--reinstall",
          description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
        },
        {
          name: "--no-reinstall",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--compile-bytecode",
          description: "Compile Python files to bytecode after installation",
        },
        {
          name: "--no-compile-bytecode",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--refresh",
          description: "Refresh all cached data",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--no-refresh",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--all-packages",
          description: "Run the command with all workspace members installed",
          exclusiveOn: [
            "--package",
          ],
        },
        {
          name: "--no-project",
          description: "Avoid discovering the project or workspace",
          exclusiveOn: [
            "--package",
          ],
        },
        {
          name: "--show-resolution",
          description: "Whether to show resolver and installer output from any environment modifications",
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "init",
      description: "Create a new project",
      options: [
        {
          name: "--name",
          description: "The name of the project",
          exclusiveOn: [
            "--script",
          ],
          isRepeatable: true,
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--vcs",
          description: "Initialize a version control system for the project",
          exclusiveOn: [
            "--script",
          ],
          isRepeatable: true,
          args: {
            name: "vcs",
            isOptional: true,
            suggestions: [
              {
                name: "git",
                description: "Use Git for version control",
              },
              {
                name: "none",
                description: "Do not use any version control system",
              },
            ],
          },
        },
        {
          name: "--build-backend",
          description: "Initialize a build-backend of choice for the project",
          exclusiveOn: [
            "--script",
            "--no-package",
          ],
          isRepeatable: true,
          args: {
            name: "build_backend",
            isOptional: true,
            suggestions: [
              {
                name: "hatch",
                description: "Use [hatchling](https://pypi.org/project/hatchling) as the project build backend",
              },
              {
                name: "flit",
                description: "Use [flit-core](https://pypi.org/project/flit-core) as the project build backend",
              },
              {
                name: "pdm",
                description: "Use [pdm-backend](https://pypi.org/project/pdm-backend) as the project build backend",
              },
              {
                name: "setuptools",
                description: "Use [setuptools](https://pypi.org/project/setuptools) as the project build backend",
              },
              {
                name: "maturin",
                description: "Use [maturin](https://pypi.org/project/maturin) as the project build backend",
              },
              {
                name: "scikit",
                description: "Use [scikit-build-core](https://pypi.org/project/scikit-build-core) as the project build backend",
              },
            ],
          },
        },
        {
          name: "--author-from",
          description: "Fill in the `authors` field in the `pyproject.toml`",
          isRepeatable: true,
          args: {
            name: "author_from",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Fetch the author information from some sources (e.g., Git) automatically",
              },
              {
                name: "git",
                description: "Fetch the author information from Git configuration only",
              },
              {
                name: "none",
                description: "Do not infer the author information",
              },
            ],
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use to determine the minimum supported Python version",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--virtual",
          description: "Create a virtual project, rather than a package",
          exclusiveOn: [
            "--package",
          ],
        },
        {
          name: "--package",
          description: "Set up the project to be built as a Python package",
        },
        {
          name: "--no-package",
          description: "Do not set up the project to be built as a Python package",
          exclusiveOn: [
            "--lib",
            "--build-backend",
          ],
        },
        {
          name: "--app",
          description: "Create a project for an application",
          exclusiveOn: [
            "--lib",
            "--script",
          ],
        },
        {
          name: "--lib",
          description: "Create a project for a library",
          exclusiveOn: [
            "--app",
            "--script",
          ],
        },
        {
          name: "--script",
          description: "Create a script",
          exclusiveOn: [
            "--app",
            "--lib",
            "--package",
            "--build-backend",
          ],
        },
        {
          name: "--no-readme",
          description: "Do not create a `README.md` file",
        },
        {
          name: "--no-pin-python",
          description: "Do not create a `.python-version` file for the project",
        },
        {
          name: "--no-workspace",
          description: "Avoid discovering a workspace and create a standalone project",
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "path",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "add",
      description: "Add dependencies to the project",
      options: [
        {
          name: ["-r", "--requirements"],
          description: "Add all packages listed in the given `requirements.txt` files",
          isRepeatable: true,
          args: {
            name: "requirements",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--optional",
          description: "Add the requirements to the package's optional dependencies for the specified extra",
          exclusiveOn: [
            "--dev",
            "--group",
          ],
          isRepeatable: true,
          args: {
            name: "optional",
            isOptional: true,
          },
        },
        {
          name: "--group",
          description: "Add the requirements to the specified dependency group",
          exclusiveOn: [
            "--dev",
            "--optional",
          ],
          isRepeatable: true,
          args: {
            name: "group",
            isOptional: true,
          },
        },
        {
          name: "--rev",
          description: "Commit to use when adding a dependency from Git",
          isRepeatable: true,
          args: {
            name: "rev",
            isOptional: true,
          },
        },
        {
          name: "--tag",
          description: "Tag to use when adding a dependency from Git",
          isRepeatable: true,
          args: {
            name: "tag",
            isOptional: true,
          },
        },
        {
          name: "--branch",
          description: "Branch to use when adding a dependency from Git",
          isRepeatable: true,
          args: {
            name: "branch",
            isOptional: true,
          },
        },
        {
          name: "--extra",
          description: "Extras to enable for the dependency",
          isRepeatable: true,
          args: {
            name: "extra",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--reinstall-package",
          description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "reinstall_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--refresh-package",
          description: "Refresh cached data for a specific package",
          isRepeatable: true,
          args: {
            name: "refresh_package",
            isOptional: true,
          },
        },
        {
          name: "--package",
          description: "Add the dependency to a specific package in the workspace",
          exclusiveOn: [
            "--isolated",
          ],
          isRepeatable: true,
          args: {
            name: "package",
            isOptional: true,
          },
        },
        {
          name: "--script",
          description: "Add the dependency to the specified Python script, rather than to a project",
          exclusiveOn: [
            "--dev",
            "--optional",
          ],
          isRepeatable: true,
          args: {
            name: "script",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use for resolving and syncing",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--dev",
          description: "Add the requirements to the development dependency group",
          exclusiveOn: [
            "--optional",
            "--group",
          ],
        },
        {
          name: "--editable",
          description: "Add the requirements as editable",
        },
        {
          name: "--no-editable",
        },
        {
          name: "--raw-sources",
          description: "Add source requirements to `project.dependencies`, rather than `tool.uv.sources`",
          exclusiveOn: [
            "--editable",
            "--no-editable",
            "--rev",
            "--tag",
            "--branch",
          ],
        },
        {
          name: "--no-sync",
          description: "Avoid syncing the virtual environment",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--locked",
          description: "Assert that the `uv.lock` will remain unchanged",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--frozen",
          description: "Add dependencies without re-locking the project",
          exclusiveOn: [
            "--locked",
          ],
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--reinstall",
          description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
        },
        {
          name: "--no-reinstall",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--compile-bytecode",
          description: "Compile Python files to bytecode after installation",
        },
        {
          name: "--no-compile-bytecode",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--refresh",
          description: "Refresh all cached data",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--no-refresh",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "packages",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "remove",
      description: "Remove dependencies from the project",
      options: [
        {
          name: "--optional",
          description: "Remove the packages from the project's optional dependencies for the specified extra",
          exclusiveOn: [
            "--dev",
            "--group",
          ],
          isRepeatable: true,
          args: {
            name: "optional",
            isOptional: true,
          },
        },
        {
          name: "--group",
          description: "Remove the packages from the specified dependency group",
          exclusiveOn: [
            "--dev",
            "--optional",
          ],
          isRepeatable: true,
          args: {
            name: "group",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--reinstall-package",
          description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "reinstall_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--refresh-package",
          description: "Refresh cached data for a specific package",
          isRepeatable: true,
          args: {
            name: "refresh_package",
            isOptional: true,
          },
        },
        {
          name: "--package",
          description: "Remove the dependencies from a specific package in the workspace",
          exclusiveOn: [
            "--isolated",
          ],
          isRepeatable: true,
          args: {
            name: "package",
            isOptional: true,
          },
        },
        {
          name: "--script",
          description: "Remove the dependency from the specified Python script, rather than from a project",
          isRepeatable: true,
          args: {
            name: "script",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use for resolving and syncing",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--dev",
          description: "Remove the packages from the development dependency group",
          exclusiveOn: [
            "--optional",
            "--group",
          ],
        },
        {
          name: "--no-sync",
          description: "Avoid syncing the virtual environment after re-locking the project",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--locked",
          description: "Assert that the `uv.lock` will remain unchanged",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--frozen",
          description: "Remove dependencies without re-locking the project",
          exclusiveOn: [
            "--locked",
          ],
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--reinstall",
          description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
        },
        {
          name: "--no-reinstall",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--compile-bytecode",
          description: "Compile Python files to bytecode after installation",
        },
        {
          name: "--no-compile-bytecode",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--refresh",
          description: "Refresh all cached data",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--no-refresh",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "packages",
        isVariadic: true,
      },
    },
    {
      name: "sync",
      description: "Update the project's environment",
      options: [
        {
          name: "--extra",
          description: "Include optional dependencies from the specified extra name",
          exclusiveOn: [
            "--all-extras",
          ],
          isRepeatable: true,
          args: {
            name: "extra",
            isOptional: true,
          },
        },
        {
          name: "--group",
          description: "Include dependencies from the specified dependency group",
          exclusiveOn: [
            "--only-group",
          ],
          isRepeatable: true,
          args: {
            name: "group",
            isOptional: true,
          },
        },
        {
          name: "--no-group",
          description: "Exclude dependencies from the specified dependency group",
          isRepeatable: true,
          args: {
            name: "no_group",
            isOptional: true,
          },
        },
        {
          name: "--only-group",
          description: "Only include dependencies from the specified dependency group",
          exclusiveOn: [
            "--group",
          ],
          isRepeatable: true,
          args: {
            name: "only_group",
            isOptional: true,
          },
        },
        {
          name: "--no-install-package",
          description: "Do not install the given package(s)",
          isRepeatable: true,
          args: {
            name: "no_install_package",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--reinstall-package",
          description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "reinstall_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--refresh-package",
          description: "Refresh cached data for a specific package",
          isRepeatable: true,
          args: {
            name: "refresh_package",
            isOptional: true,
          },
        },
        {
          name: "--package",
          description: "Sync for a specific package in the workspace",
          exclusiveOn: [
            "--all-packages",
          ],
          isRepeatable: true,
          args: {
            name: "package",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use for the project environment",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--all-extras",
          description: "Include all optional dependencies",
          exclusiveOn: [
            "--extra",
          ],
        },
        {
          name: "--no-all-extras",
        },
        {
          name: "--dev",
          description: "Include the development dependency group",
        },
        {
          name: "--no-dev",
          description: "Omit the development dependency group",
        },
        {
          name: "--only-dev",
          description: "Only include the development dependency group",
          exclusiveOn: [
            "--no-dev",
          ],
        },
        {
          name: "--no-editable",
          description: "Install any editable dependencies, including the project and any workspace members, as non-editable",
        },
        {
          name: "--inexact",
          description: "Do not remove extraneous packages present in the environment",
        },
        {
          name: "--exact",
          description: "Perform an exact sync, removing extraneous packages",
        },
        {
          name: "--no-install-project",
          description: "Do not install the current project",
        },
        {
          name: "--no-install-workspace",
          description: "Do not install any workspace members, including the root project",
        },
        {
          name: "--locked",
          description: "Assert that the `uv.lock` will remain unchanged",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--frozen",
          description: "Sync without updating the `uv.lock` file",
          exclusiveOn: [
            "--locked",
          ],
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--reinstall",
          description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
        },
        {
          name: "--no-reinstall",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--compile-bytecode",
          description: "Compile Python files to bytecode after installation",
        },
        {
          name: "--no-compile-bytecode",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--refresh",
          description: "Refresh all cached data",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--no-refresh",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--all-packages",
          description: "Sync all packages in the workspace",
          exclusiveOn: [
            "--package",
          ],
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "lock",
      description: "Update the project's lockfile",
      options: [
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--refresh-package",
          description: "Refresh cached data for a specific package",
          isRepeatable: true,
          args: {
            name: "refresh_package",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use during resolution",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--locked",
          description: "Assert that the `uv.lock` will remain unchanged",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--frozen",
          description: "Assert that a `uv.lock` exists, without updating it",
          exclusiveOn: [
            "--locked",
          ],
        },
        {
          name: "--dry-run",
          description: "Perform a dry run, without writing the lockfile",
          exclusiveOn: [
            "--frozen",
            "--locked",
          ],
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--refresh",
          description: "Refresh all cached data",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--no-refresh",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "export",
      description: "Export the project's lockfile to an alternate format",
      options: [
        {
          name: "--format",
          description: "The format to which `uv.lock` should be exported",
          isRepeatable: true,
          args: {
            name: "format",
            isOptional: true,
            suggestions: [
              {
                name: "requirements-txt",
                description: "Export in `requirements.txt` format",
              },
            ],
          },
        },
        {
          name: "--package",
          description: "Export the dependencies for a specific package in the workspace",
          exclusiveOn: [
            "--all-packages",
          ],
          isRepeatable: true,
          args: {
            name: "package",
            isOptional: true,
          },
        },
        {
          name: "--extra",
          description: "Include optional dependencies from the specified extra name",
          exclusiveOn: [
            "--all-extras",
          ],
          isRepeatable: true,
          args: {
            name: "extra",
            isOptional: true,
          },
        },
        {
          name: "--group",
          description: "Include dependencies from the specified dependency group",
          exclusiveOn: [
            "--only-group",
          ],
          isRepeatable: true,
          args: {
            name: "group",
            isOptional: true,
          },
        },
        {
          name: "--no-group",
          description: "Exclude dependencies from the specified dependency group",
          isRepeatable: true,
          args: {
            name: "no_group",
            isOptional: true,
          },
        },
        {
          name: "--only-group",
          description: "Only include dependencies from the specified dependency group",
          exclusiveOn: [
            "--group",
          ],
          isRepeatable: true,
          args: {
            name: "only_group",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--output-file"],
          description: "Write the exported requirements to the given file",
          isRepeatable: true,
          args: {
            name: "output_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-emit-package",
          description: "Do not emit the given package(s)",
          isRepeatable: true,
          args: {
            name: "no_emit_package",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--refresh-package",
          description: "Refresh cached data for a specific package",
          isRepeatable: true,
          args: {
            name: "refresh_package",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use during resolution",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--all-packages",
          description: "Export the entire workspace",
          exclusiveOn: [
            "--package",
          ],
        },
        {
          name: "--all-extras",
          description: "Include all optional dependencies",
          exclusiveOn: [
            "--extra",
          ],
        },
        {
          name: "--no-all-extras",
        },
        {
          name: "--dev",
          description: "Include the development dependency group",
        },
        {
          name: "--no-dev",
          description: "Omit the development dependency group",
        },
        {
          name: "--only-dev",
          description: "Only include the development dependency group",
          exclusiveOn: [
            "--no-dev",
          ],
        },
        {
          name: "--no-header",
          description: "Exclude the comment header at the top of the generated output file",
        },
        {
          name: "--header",
        },
        {
          name: "--no-editable",
          description: "Install any editable dependencies, including the project and any workspace members, as non-editable",
        },
        {
          name: "--hashes",
          description: "Include hashes for all dependencies",
        },
        {
          name: "--no-hashes",
          description: "Omit hashes in the generated output",
        },
        {
          name: "--no-emit-project",
          description: "Do not emit the current project",
        },
        {
          name: "--no-emit-workspace",
          description: "Do not emit any workspace members, including the root project",
        },
        {
          name: "--locked",
          description: "Assert that the `uv.lock` will remain unchanged",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--frozen",
          description: "Do not update the `uv.lock` before exporting",
          exclusiveOn: [
            "--locked",
          ],
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--refresh",
          description: "Refresh all cached data",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--no-refresh",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "tree",
      description: "Display the project's dependency tree",
      options: [
        {
          name: ["-d", "--depth"],
          description: "Maximum display depth of the dependency tree",
          isRepeatable: true,
          args: {
            name: "depth",
            isOptional: true,
          },
        },
        {
          name: "--prune",
          description: "Prune the given package from the display of the dependency tree",
          isRepeatable: true,
          args: {
            name: "prune",
            isOptional: true,
          },
        },
        {
          name: "--package",
          description: "Display only the specified packages",
          isRepeatable: true,
          args: {
            name: "package",
            isOptional: true,
          },
        },
        {
          name: "--group",
          description: "Include dependencies from the specified dependency group",
          exclusiveOn: [
            "--only-group",
          ],
          isRepeatable: true,
          args: {
            name: "group",
            isOptional: true,
          },
        },
        {
          name: "--no-group",
          description: "Exclude dependencies from the specified dependency group",
          isRepeatable: true,
          args: {
            name: "no_group",
            isOptional: true,
          },
        },
        {
          name: "--only-group",
          description: "Only include dependencies from the specified dependency group",
          exclusiveOn: [
            "--group",
          ],
          isRepeatable: true,
          args: {
            name: "only_group",
            isOptional: true,
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--python-version",
          description: "The Python version to use when filtering the tree",
          exclusiveOn: [
            "--universal",
          ],
          isRepeatable: true,
          args: {
            name: "python_version",
            isOptional: true,
          },
        },
        {
          name: "--python-platform",
          description: "The platform to use when filtering the tree",
          exclusiveOn: [
            "--universal",
          ],
          isRepeatable: true,
          args: {
            name: "python_platform",
            isOptional: true,
            suggestions: [
              {
                name: "windows",
                description: "An alias for `x86_64-pc-windows-msvc`, the default target for Windows",
              },
              {
                name: "linux",
                description: "An alias for `x86_64-unknown-linux-gnu`, the default target for Linux",
              },
              {
                name: "macos",
                description: "An alias for `aarch64-apple-darwin`, the default target for macOS",
              },
              {
                name: "x86_64-pc-windows-msvc",
                description: "A 64-bit x86 Windows target",
              },
              {
                name: "i686-pc-windows-msvc",
                description: "A 32-bit x86 Windows target",
              },
              {
                name: "x86_64-unknown-linux-gnu",
                description: "An x86 Linux target. Equivalent to `x86_64-manylinux_2_17`",
              },
              {
                name: "aarch64-apple-darwin",
                description: "An ARM-based macOS target, as seen on Apple Silicon devices",
              },
              {
                name: "x86_64-apple-darwin",
                description: "An x86 macOS target",
              },
              {
                name: "aarch64-unknown-linux-gnu",
                description: "An ARM64 Linux target. Equivalent to `aarch64-manylinux_2_17`",
              },
              {
                name: "aarch64-unknown-linux-musl",
                description: "An ARM64 Linux target",
              },
              {
                name: "x86_64-unknown-linux-musl",
                description: "An `x86_64` Linux target",
              },
              {
                name: "x86_64-manylinux_2_17",
                description: "An `x86_64` target for the `manylinux_2_17` platform",
              },
              {
                name: "x86_64-manylinux_2_28",
                description: "An `x86_64` target for the `manylinux_2_28` platform",
              },
              {
                name: "x86_64-manylinux_2_31",
                description: "An `x86_64` target for the `manylinux_2_31` platform",
              },
              {
                name: "aarch64-manylinux_2_17",
                description: "An ARM64 target for the `manylinux_2_17` platform",
              },
              {
                name: "aarch64-manylinux_2_28",
                description: "An ARM64 target for the `manylinux_2_28` platform",
              },
              {
                name: "aarch64-manylinux_2_31",
                description: "An ARM64 target for the `manylinux_2_31` platform",
              },
            ],
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use for locking and filtering",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--universal",
          description: "Show a platform-independent dependency tree",
        },
        {
          name: "--no-dedupe",
          description: "Do not de-duplicate repeated dependencies. Usually, when a package has already displayed its dependencies, further occurrences will not re-display its dependencies, and will include a (*) to indicate it has already been shown. This flag will cause those duplicates to be repeated",
        },
        {
          name: "--invert",
          description: "Show the reverse dependencies for the given package. This flag will invert the tree and display the packages that depend on the given package",
        },
        {
          name: "--outdated",
          description: "Show the latest available version of each package in the tree",
        },
        {
          name: "--dev",
          description: "Include the development dependency group",
        },
        {
          name: "--only-dev",
          description: "Only include the development dependency group",
          exclusiveOn: [
            "--no-dev",
          ],
        },
        {
          name: "--no-dev",
          description: "Omit the development dependency group",
          exclusiveOn: [
            "--invert",
          ],
        },
        {
          name: "--locked",
          description: "Assert that the `uv.lock` will remain unchanged",
          exclusiveOn: [
            "--frozen",
          ],
        },
        {
          name: "--frozen",
          description: "Display the requirements without locking the project",
          exclusiveOn: [
            "--locked",
          ],
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "tool",
      description: "Run and install commands provided by Python packages",
      subcommands: [
        {
          name: "run",
          description: "Run a command provided by a Python package",
          options: [
            {
              name: "--from",
              description: "Use the given package to provide the command",
              isRepeatable: true,
              args: {
                name: "from",
                isOptional: true,
              },
            },
            {
              name: "--with",
              description: "Run with the given packages installed",
              isRepeatable: true,
              args: {
                name: "with",
                isOptional: true,
              },
            },
            {
              name: "--with-editable",
              description: "Run with the given packages installed as editables",
              isRepeatable: true,
              args: {
                name: "with_editable",
                isOptional: true,
              },
            },
            {
              name: "--with-requirements",
              description: "Run with all packages listed in the given `requirements.txt` files",
              isRepeatable: true,
              args: {
                name: "with_requirements",
                isOptional: true,
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: ["-P", "--upgrade-package"],
              description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "upgrade_package",
                isOptional: true,
              },
            },
            {
              name: "--reinstall-package",
              description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "reinstall_package",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--resolution",
              description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
              isRepeatable: true,
              args: {
                name: "resolution",
                isOptional: true,
                suggestions: [
                  {
                    name: "highest",
                    description: "Resolve the highest compatible version of each package",
                  },
                  {
                    name: "lowest",
                    description: "Resolve the lowest compatible version of each package",
                  },
                  {
                    name: "lowest-direct",
                    description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
                  },
                ],
              },
            },
            {
              name: "--prerelease",
              description: "The strategy to use when considering pre-release versions",
              isRepeatable: true,
              args: {
                name: "prerelease",
                isOptional: true,
                suggestions: [
                  {
                    name: "disallow",
                    description: "Disallow all pre-release versions",
                  },
                  {
                    name: "allow",
                    description: "Allow all pre-release versions",
                  },
                  {
                    name: "if-necessary",
                    description: "Allow pre-release versions if all versions of a package are pre-release",
                  },
                  {
                    name: "explicit",
                    description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
                  },
                  {
                    name: "if-necessary-or-explicit",
                    description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
                  },
                ],
              },
            },
            {
              name: ["-C", "--config-setting"],
              description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
              isRepeatable: true,
              args: {
                name: "config_setting",
                isOptional: true,
              },
            },
            {
              name: "--no-build-isolation-package",
              description: "Disable isolation when building source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_isolation_package",
                isOptional: true,
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: "--link-mode",
              description: "The method to use when installing packages from the global cache",
              isRepeatable: true,
              args: {
                name: "link_mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "clone",
                    description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "copy",
                    description: "Copy packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "hardlink",
                    description: "Hard link packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "symlink",
                    description: "Symbolically link packages from the wheel into the `site-packages` directory",
                  },
                ],
              },
            },
            {
              name: "--no-build-package",
              description: "Don't build source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_package",
                isOptional: true,
              },
            },
            {
              name: "--no-binary-package",
              description: "Don't install pre-built wheels for a specific package",
              isRepeatable: true,
              args: {
                name: "no_binary_package",
                isOptional: true,
              },
            },
            {
              name: "--refresh-package",
              description: "Refresh cached data for a specific package",
              isRepeatable: true,
              args: {
                name: "refresh_package",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter to use to build the run environment",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--generate-shell-completion",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "generate_shell_completion",
                isOptional: true,
                suggestions: [
                  "bash",
                  "elvish",
                  "fish",
                  "nushell",
                  "powershell",
                  "zsh",
                ],
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--isolated",
              description: "Run the tool in an isolated virtual environment, ignoring any already-installed tools",
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: ["-U", "--upgrade"],
              description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
            },
            {
              name: "--no-upgrade",
            },
            {
              name: "--reinstall",
              description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
            },
            {
              name: "--no-reinstall",
            },
            {
              name: "--pre",
            },
            {
              name: "--no-build-isolation",
              description: "Disable isolation when building source distributions",
            },
            {
              name: "--build-isolation",
            },
            {
              name: "--compile-bytecode",
              description: "Compile Python files to bytecode after installation",
            },
            {
              name: "--no-compile-bytecode",
            },
            {
              name: "--no-sources",
              description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
            },
            {
              name: "--no-build",
              description: "Don't build source distributions",
            },
            {
              name: "--build",
            },
            {
              name: "--no-binary",
              description: "Don't install pre-built wheels",
            },
            {
              name: "--binary",
            },
            {
              name: "--refresh",
              description: "Refresh all cached data",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-refresh",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--show-resolution",
              description: "Whether to show resolver and installer output from any environment modifications",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "uvx",
          description: "Run a command provided by a Python package",
          hidden: true,
          options: [
            {
              name: "--from",
              description: "Use the given package to provide the command",
              isRepeatable: true,
              args: {
                name: "from",
                isOptional: true,
              },
            },
            {
              name: "--with",
              description: "Run with the given packages installed",
              isRepeatable: true,
              args: {
                name: "with",
                isOptional: true,
              },
            },
            {
              name: "--with-editable",
              description: "Run with the given packages installed as editables",
              isRepeatable: true,
              args: {
                name: "with_editable",
                isOptional: true,
              },
            },
            {
              name: "--with-requirements",
              description: "Run with all packages listed in the given `requirements.txt` files",
              isRepeatable: true,
              args: {
                name: "with_requirements",
                isOptional: true,
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: ["-P", "--upgrade-package"],
              description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "upgrade_package",
                isOptional: true,
              },
            },
            {
              name: "--reinstall-package",
              description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "reinstall_package",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--resolution",
              description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
              isRepeatable: true,
              args: {
                name: "resolution",
                isOptional: true,
                suggestions: [
                  {
                    name: "highest",
                    description: "Resolve the highest compatible version of each package",
                  },
                  {
                    name: "lowest",
                    description: "Resolve the lowest compatible version of each package",
                  },
                  {
                    name: "lowest-direct",
                    description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
                  },
                ],
              },
            },
            {
              name: "--prerelease",
              description: "The strategy to use when considering pre-release versions",
              isRepeatable: true,
              args: {
                name: "prerelease",
                isOptional: true,
                suggestions: [
                  {
                    name: "disallow",
                    description: "Disallow all pre-release versions",
                  },
                  {
                    name: "allow",
                    description: "Allow all pre-release versions",
                  },
                  {
                    name: "if-necessary",
                    description: "Allow pre-release versions if all versions of a package are pre-release",
                  },
                  {
                    name: "explicit",
                    description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
                  },
                  {
                    name: "if-necessary-or-explicit",
                    description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
                  },
                ],
              },
            },
            {
              name: ["-C", "--config-setting"],
              description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
              isRepeatable: true,
              args: {
                name: "config_setting",
                isOptional: true,
              },
            },
            {
              name: "--no-build-isolation-package",
              description: "Disable isolation when building source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_isolation_package",
                isOptional: true,
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: "--link-mode",
              description: "The method to use when installing packages from the global cache",
              isRepeatable: true,
              args: {
                name: "link_mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "clone",
                    description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "copy",
                    description: "Copy packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "hardlink",
                    description: "Hard link packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "symlink",
                    description: "Symbolically link packages from the wheel into the `site-packages` directory",
                  },
                ],
              },
            },
            {
              name: "--no-build-package",
              description: "Don't build source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_package",
                isOptional: true,
              },
            },
            {
              name: "--no-binary-package",
              description: "Don't install pre-built wheels for a specific package",
              isRepeatable: true,
              args: {
                name: "no_binary_package",
                isOptional: true,
              },
            },
            {
              name: "--refresh-package",
              description: "Refresh cached data for a specific package",
              isRepeatable: true,
              args: {
                name: "refresh_package",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter to use to build the run environment",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--generate-shell-completion",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "generate_shell_completion",
                isOptional: true,
                suggestions: [
                  "bash",
                  "elvish",
                  "fish",
                  "nushell",
                  "powershell",
                  "zsh",
                ],
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--isolated",
              description: "Run the tool in an isolated virtual environment, ignoring any already-installed tools",
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: ["-U", "--upgrade"],
              description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
            },
            {
              name: "--no-upgrade",
            },
            {
              name: "--reinstall",
              description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
            },
            {
              name: "--no-reinstall",
            },
            {
              name: "--pre",
            },
            {
              name: "--no-build-isolation",
              description: "Disable isolation when building source distributions",
            },
            {
              name: "--build-isolation",
            },
            {
              name: "--compile-bytecode",
              description: "Compile Python files to bytecode after installation",
            },
            {
              name: "--no-compile-bytecode",
            },
            {
              name: "--no-sources",
              description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
            },
            {
              name: "--no-build",
              description: "Don't build source distributions",
            },
            {
              name: "--build",
            },
            {
              name: "--no-binary",
              description: "Don't install pre-built wheels",
            },
            {
              name: "--binary",
            },
            {
              name: "--refresh",
              description: "Refresh all cached data",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-refresh",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--show-resolution",
              description: "Whether to show resolver and installer output from any environment modifications",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "install",
          description: "Install commands provided by a Python package",
          options: [
            {
              name: "--from",
              description: "The package to install commands from",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "from",
                isOptional: true,
              },
            },
            {
              name: "--with",
              description: "Include the following extra requirements",
              isRepeatable: true,
              args: {
                name: "with",
                isOptional: true,
              },
            },
            {
              name: "--with-editable",
              description: "Include the given packages as editables",
              isRepeatable: true,
              args: {
                name: "with_editable",
                isOptional: true,
              },
            },
            {
              name: "--with-requirements",
              description: "Run all requirements listed in the given `requirements.txt` files",
              isRepeatable: true,
              args: {
                name: "with_requirements",
                isOptional: true,
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: ["-P", "--upgrade-package"],
              description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "upgrade_package",
                isOptional: true,
              },
            },
            {
              name: "--reinstall-package",
              description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "reinstall_package",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--resolution",
              description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
              isRepeatable: true,
              args: {
                name: "resolution",
                isOptional: true,
                suggestions: [
                  {
                    name: "highest",
                    description: "Resolve the highest compatible version of each package",
                  },
                  {
                    name: "lowest",
                    description: "Resolve the lowest compatible version of each package",
                  },
                  {
                    name: "lowest-direct",
                    description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
                  },
                ],
              },
            },
            {
              name: "--prerelease",
              description: "The strategy to use when considering pre-release versions",
              isRepeatable: true,
              args: {
                name: "prerelease",
                isOptional: true,
                suggestions: [
                  {
                    name: "disallow",
                    description: "Disallow all pre-release versions",
                  },
                  {
                    name: "allow",
                    description: "Allow all pre-release versions",
                  },
                  {
                    name: "if-necessary",
                    description: "Allow pre-release versions if all versions of a package are pre-release",
                  },
                  {
                    name: "explicit",
                    description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
                  },
                  {
                    name: "if-necessary-or-explicit",
                    description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
                  },
                ],
              },
            },
            {
              name: ["-C", "--config-setting"],
              description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
              isRepeatable: true,
              args: {
                name: "config_setting",
                isOptional: true,
              },
            },
            {
              name: "--no-build-isolation-package",
              description: "Disable isolation when building source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_isolation_package",
                isOptional: true,
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: "--link-mode",
              description: "The method to use when installing packages from the global cache",
              isRepeatable: true,
              args: {
                name: "link_mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "clone",
                    description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "copy",
                    description: "Copy packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "hardlink",
                    description: "Hard link packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "symlink",
                    description: "Symbolically link packages from the wheel into the `site-packages` directory",
                  },
                ],
              },
            },
            {
              name: "--no-build-package",
              description: "Don't build source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_package",
                isOptional: true,
              },
            },
            {
              name: "--no-binary-package",
              description: "Don't install pre-built wheels for a specific package",
              isRepeatable: true,
              args: {
                name: "no_binary_package",
                isOptional: true,
              },
            },
            {
              name: "--refresh-package",
              description: "Refresh cached data for a specific package",
              isRepeatable: true,
              args: {
                name: "refresh_package",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter to use to build the tool environment",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-e", "--editable"],
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: ["-U", "--upgrade"],
              description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
            },
            {
              name: "--no-upgrade",
            },
            {
              name: "--reinstall",
              description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
            },
            {
              name: "--no-reinstall",
            },
            {
              name: "--pre",
            },
            {
              name: "--no-build-isolation",
              description: "Disable isolation when building source distributions",
            },
            {
              name: "--build-isolation",
            },
            {
              name: "--compile-bytecode",
              description: "Compile Python files to bytecode after installation",
            },
            {
              name: "--no-compile-bytecode",
            },
            {
              name: "--no-sources",
              description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
            },
            {
              name: "--no-build",
              description: "Don't build source distributions",
            },
            {
              name: "--build",
            },
            {
              name: "--no-binary",
              description: "Don't install pre-built wheels",
            },
            {
              name: "--binary",
            },
            {
              name: "--refresh",
              description: "Refresh all cached data",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-refresh",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--force",
              description: "Force installation of the tool",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "package",
          },
        },
        {
          name: ["upgrade", "update"],
          description: "Upgrade installed tools",
          options: [
            {
              name: ["-p", "--python"],
              description: "Upgrade a tool, and specify it to use the given Python interpreter to build its environment. Use with `--all` to apply to all tools",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: ["-P", "--upgrade-package"],
              description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "upgrade_package",
                isOptional: true,
              },
            },
            {
              name: "--reinstall-package",
              description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "reinstall_package",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--resolution",
              description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
              isRepeatable: true,
              args: {
                name: "resolution",
                isOptional: true,
                suggestions: [
                  {
                    name: "highest",
                    description: "Resolve the highest compatible version of each package",
                  },
                  {
                    name: "lowest",
                    description: "Resolve the lowest compatible version of each package",
                  },
                  {
                    name: "lowest-direct",
                    description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
                  },
                ],
              },
            },
            {
              name: "--prerelease",
              description: "The strategy to use when considering pre-release versions",
              isRepeatable: true,
              args: {
                name: "prerelease",
                isOptional: true,
                suggestions: [
                  {
                    name: "disallow",
                    description: "Disallow all pre-release versions",
                  },
                  {
                    name: "allow",
                    description: "Allow all pre-release versions",
                  },
                  {
                    name: "if-necessary",
                    description: "Allow pre-release versions if all versions of a package are pre-release",
                  },
                  {
                    name: "explicit",
                    description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
                  },
                  {
                    name: "if-necessary-or-explicit",
                    description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
                  },
                ],
              },
            },
            {
              name: ["-C", "--config-setting"],
              description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
              isRepeatable: true,
              args: {
                name: "config_setting",
                isOptional: true,
              },
            },
            {
              name: "--no-build-isolation-package",
              description: "Disable isolation when building source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_isolation_package",
                isOptional: true,
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: "--link-mode",
              description: "The method to use when installing packages from the global cache",
              isRepeatable: true,
              args: {
                name: "link_mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "clone",
                    description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "copy",
                    description: "Copy packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "hardlink",
                    description: "Hard link packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "symlink",
                    description: "Symbolically link packages from the wheel into the `site-packages` directory",
                  },
                ],
              },
            },
            {
              name: "--no-build-package",
              description: "Don't build source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_package",
                isOptional: true,
              },
            },
            {
              name: "--no-binary-package",
              description: "Don't install pre-built wheels for a specific package",
              isRepeatable: true,
              args: {
                name: "no_binary_package",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--all",
              description: "Upgrade all tools",
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: ["-U", "--upgrade"],
              description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
            },
            {
              name: "--no-upgrade",
            },
            {
              name: "--reinstall",
              description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
            },
            {
              name: "--no-reinstall",
            },
            {
              name: "--pre",
            },
            {
              name: "--no-build-isolation",
              description: "Disable isolation when building source distributions",
            },
            {
              name: "--build-isolation",
            },
            {
              name: "--compile-bytecode",
              description: "Compile Python files to bytecode after installation",
            },
            {
              name: "--no-compile-bytecode",
            },
            {
              name: "--no-sources",
              description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
            },
            {
              name: "--no-build",
              description: "Don't build source distributions",
            },
            {
              name: "--build",
            },
            {
              name: "--no-binary",
              description: "Don't install pre-built wheels",
            },
            {
              name: "--binary",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "name",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description: "List installed tools",
          options: [
            {
              name: "--python-preference",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--show-paths",
              description: "Whether to display the path to each tool environment and installed executable",
            },
            {
              name: "--show-version-specifiers",
              description: "Whether to display the version specifier(s) used to install each tool",
            },
            {
              name: "--no-python-downloads",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall a tool",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--all",
              description: "Uninstall all tools",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "name",
            isVariadic: true,
          },
        },
        {
          name: ["update-shell", "ensurepath"],
          description: "Ensure that the tool executable directory is on the `PATH`",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "dir",
          description: "Show the path to the uv tools directory",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--bin",
              description: "Show the directory into which `uv tool` will install executables",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
      ],
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "python",
      description: "Manage Python versions and installations",
      subcommands: [
        {
          name: "list",
          description: "List the available Python installations",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--all-versions",
              description: "List all Python versions, including old patch versions",
            },
            {
              name: "--all-platforms",
              description: "List Python downloads for all platforms",
            },
            {
              name: "--only-installed",
              description: "Only show installed Python versions, exclude available downloads",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "install",
          description: "Download and install Python versions",
          options: [
            {
              name: "--mirror",
              description: "Set the URL to use as the source for downloading Python installations",
              isRepeatable: true,
              args: {
                name: "mirror",
                isOptional: true,
              },
            },
            {
              name: "--pypy-mirror",
              description: "Set the URL to use as the source for downloading PyPy installations",
              isRepeatable: true,
              args: {
                name: "pypy_mirror",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-r", "--reinstall"],
              description: "Reinstall the requested Python version, if it's already installed",
            },
            {
              name: ["-f", "--force"],
              description: "Replace existing Python executables during installation",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "targets",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "find",
          description: "Search for a Python installation",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--no-project",
              description: "Avoid discovering a project or workspace",
            },
            {
              name: "--system",
              description: "Only find system Python interpreters",
            },
            {
              name: "--no-system",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "request",
            isOptional: true,
          },
        },
        {
          name: "pin",
          description: "Pin to a specific Python version",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--resolved",
              description: "Write the resolved Python interpreter path instead of the request",
            },
            {
              name: "--no-resolved",
            },
            {
              name: "--no-project",
              description: "Avoid validating the Python pin is compatible with the project or workspace",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "request",
            isOptional: true,
          },
        },
        {
          name: "dir",
          description: "Show the uv Python installation directory",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--bin",
              description: "Show the directory into which `uv python` will install Python executables",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall Python versions",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--all",
              description: "Uninstall all managed Python versions",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "targets",
            isVariadic: true,
          },
        },
      ],
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "pip",
      description: "Manage Python packages with a pip-compatible interface",
      subcommands: [
        {
          name: "compile",
          description: "Compile a `requirements.in` file to a `requirements.txt` file",
          options: [
            {
              name: ["-c", "--constraint"],
              description: "Constrain versions using the given requirements files",
              isRepeatable: true,
              args: {
                name: "constraint",
                isOptional: true,
              },
            },
            {
              name: "--override",
              description: "Override versions using the given requirements files",
              isRepeatable: true,
              args: {
                name: "override",
                isOptional: true,
              },
            },
            {
              name: ["-b", "--build-constraint"],
              description: "Constrain build dependencies using the given requirements files when building source distributions",
              isRepeatable: true,
              args: {
                name: "build_constraint",
                isOptional: true,
              },
            },
            {
              name: "--extra",
              description: "Include optional dependencies from the specified extra name; may be provided more than once",
              exclusiveOn: [
                "--all-extras",
              ],
              isRepeatable: true,
              args: {
                name: "extra",
                isOptional: true,
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: ["-P", "--upgrade-package"],
              description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "upgrade_package",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--resolution",
              description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
              isRepeatable: true,
              args: {
                name: "resolution",
                isOptional: true,
                suggestions: [
                  {
                    name: "highest",
                    description: "Resolve the highest compatible version of each package",
                  },
                  {
                    name: "lowest",
                    description: "Resolve the lowest compatible version of each package",
                  },
                  {
                    name: "lowest-direct",
                    description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
                  },
                ],
              },
            },
            {
              name: "--prerelease",
              description: "The strategy to use when considering pre-release versions",
              isRepeatable: true,
              args: {
                name: "prerelease",
                isOptional: true,
                suggestions: [
                  {
                    name: "disallow",
                    description: "Disallow all pre-release versions",
                  },
                  {
                    name: "allow",
                    description: "Allow all pre-release versions",
                  },
                  {
                    name: "if-necessary",
                    description: "Allow pre-release versions if all versions of a package are pre-release",
                  },
                  {
                    name: "explicit",
                    description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
                  },
                  {
                    name: "if-necessary-or-explicit",
                    description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
                  },
                ],
              },
            },
            {
              name: ["-C", "--config-setting"],
              description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
              isRepeatable: true,
              args: {
                name: "config_setting",
                isOptional: true,
              },
            },
            {
              name: "--no-build-isolation-package",
              description: "Disable isolation when building source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_isolation_package",
                isOptional: true,
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: "--link-mode",
              description: "The method to use when installing packages from the global cache",
              isRepeatable: true,
              args: {
                name: "link_mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "clone",
                    description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "copy",
                    description: "Copy packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "hardlink",
                    description: "Hard link packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "symlink",
                    description: "Symbolically link packages from the wheel into the `site-packages` directory",
                  },
                ],
              },
            },
            {
              name: "--refresh-package",
              description: "Refresh cached data for a specific package",
              isRepeatable: true,
              args: {
                name: "refresh_package",
                isOptional: true,
              },
            },
            {
              name: ["-o", "--output-file"],
              description: "Write the compiled requirements to the given `requirements.txt` file",
              isRepeatable: true,
              args: {
                name: "output_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--annotation-style",
              description: "The style of the annotation comments included in the output file, used to indicate the source of each package",
              isRepeatable: true,
              args: {
                name: "annotation_style",
                isOptional: true,
                suggestions: [
                  {
                    name: "line",
                    description: "Render the annotations on a single, comma-separated line",
                  },
                  {
                    name: "split",
                    description: "Render each annotation on its own line",
                  },
                ],
              },
            },
            {
              name: "--custom-compile-command",
              description: "The header comment to include at the top of the output file generated by `uv pip compile`",
              isRepeatable: true,
              args: {
                name: "custom_compile_command",
                isOptional: true,
              },
            },
            {
              name: "--python",
              description: "The Python interpreter to use during resolution",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--no-binary",
              description: "Don't install pre-built wheels",
              exclusiveOn: [
                "--no-build",
              ],
              isRepeatable: true,
              args: {
                name: "no_binary",
                isOptional: true,
              },
            },
            {
              name: "--only-binary",
              description: "Only use pre-built wheels; don't build source distributions",
              exclusiveOn: [
                "--no-build",
              ],
              isRepeatable: true,
              args: {
                name: "only_binary",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python-version"],
              description: "The Python version to use for resolution",
              isRepeatable: true,
              args: {
                name: "python_version",
                isOptional: true,
              },
            },
            {
              name: "--python-platform",
              description: "The platform for which requirements should be resolved",
              isRepeatable: true,
              args: {
                name: "python_platform",
                isOptional: true,
                suggestions: [
                  {
                    name: "windows",
                    description: "An alias for `x86_64-pc-windows-msvc`, the default target for Windows",
                  },
                  {
                    name: "linux",
                    description: "An alias for `x86_64-unknown-linux-gnu`, the default target for Linux",
                  },
                  {
                    name: "macos",
                    description: "An alias for `aarch64-apple-darwin`, the default target for macOS",
                  },
                  {
                    name: "x86_64-pc-windows-msvc",
                    description: "A 64-bit x86 Windows target",
                  },
                  {
                    name: "i686-pc-windows-msvc",
                    description: "A 32-bit x86 Windows target",
                  },
                  {
                    name: "x86_64-unknown-linux-gnu",
                    description: "An x86 Linux target. Equivalent to `x86_64-manylinux_2_17`",
                  },
                  {
                    name: "aarch64-apple-darwin",
                    description: "An ARM-based macOS target, as seen on Apple Silicon devices",
                  },
                  {
                    name: "x86_64-apple-darwin",
                    description: "An x86 macOS target",
                  },
                  {
                    name: "aarch64-unknown-linux-gnu",
                    description: "An ARM64 Linux target. Equivalent to `aarch64-manylinux_2_17`",
                  },
                  {
                    name: "aarch64-unknown-linux-musl",
                    description: "An ARM64 Linux target",
                  },
                  {
                    name: "x86_64-unknown-linux-musl",
                    description: "An `x86_64` Linux target",
                  },
                  {
                    name: "x86_64-manylinux_2_17",
                    description: "An `x86_64` target for the `manylinux_2_17` platform",
                  },
                  {
                    name: "x86_64-manylinux_2_28",
                    description: "An `x86_64` target for the `manylinux_2_28` platform",
                  },
                  {
                    name: "x86_64-manylinux_2_31",
                    description: "An `x86_64` target for the `manylinux_2_31` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_17",
                    description: "An ARM64 target for the `manylinux_2_17` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_28",
                    description: "An ARM64 target for the `manylinux_2_28` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_31",
                    description: "An ARM64 target for the `manylinux_2_31` platform",
                  },
                ],
              },
            },
            {
              name: "--no-emit-package",
              description: "Specify a package to omit from the output resolution. Its dependencies will still be included in the resolution. Equivalent to pip-compile's `--unsafe-package` option",
              isRepeatable: true,
              args: {
                name: "no_emit_package",
                isOptional: true,
              },
            },
            {
              name: "--resolver",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "resolver",
                isOptional: true,
                suggestions: [
                  "backtracking",
                  "legacy",
                ],
              },
            },
            {
              name: "--max-rounds",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "max_rounds",
                isOptional: true,
              },
            },
            {
              name: "--cert",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "cert",
                isOptional: true,
              },
            },
            {
              name: "--client-cert",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "client_cert",
                isOptional: true,
              },
            },
            {
              name: "--config",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "config",
                isOptional: true,
              },
            },
            {
              name: "--pip-args",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "pip_args",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--all-extras",
              description: "Include all optional dependencies",
              exclusiveOn: [
                "--extra",
              ],
            },
            {
              name: "--no-all-extras",
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: ["-U", "--upgrade"],
              description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
            },
            {
              name: "--no-upgrade",
            },
            {
              name: "--pre",
            },
            {
              name: "--no-build-isolation",
              description: "Disable isolation when building source distributions",
            },
            {
              name: "--build-isolation",
            },
            {
              name: "--no-sources",
              description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
            },
            {
              name: "--refresh",
              description: "Refresh all cached data",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-refresh",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-deps",
              description: "Ignore package dependencies, instead only add those packages explicitly listed on the command line to the resulting the requirements file",
            },
            {
              name: "--deps",
            },
            {
              name: "--no-strip-extras",
              description: "Include extras in the output file",
            },
            {
              name: "--strip-extras",
            },
            {
              name: "--no-strip-markers",
              description: "Include environment markers in the output file",
            },
            {
              name: "--strip-markers",
            },
            {
              name: "--no-annotate",
              description: "Exclude comment annotations indicating the source of each package",
            },
            {
              name: "--annotate",
            },
            {
              name: "--no-header",
              description: "Exclude the comment header at the top of the generated output file",
            },
            {
              name: "--header",
            },
            {
              name: "--system",
              description: "Install packages into the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: "--generate-hashes",
              description: "Include distribution hashes in the output file",
            },
            {
              name: "--no-generate-hashes",
            },
            {
              name: "--no-build",
              description: "Don't build source distributions",
              exclusiveOn: [
                "--no-binary",
                "--only-binary",
              ],
            },
            {
              name: "--build",
              exclusiveOn: [
                "--no-binary",
                "--only-binary",
              ],
            },
            {
              name: "--universal",
              description: "Perform a universal resolution, attempting to generate a single `requirements.txt` output file that is compatible with all operating systems, architectures, and Python implementations",
              exclusiveOn: [
                "--python-platform",
                "--strip-markers",
              ],
            },
            {
              name: "--no-universal",
            },
            {
              name: "--emit-index-url",
              description: "Include `--index-url` and `--extra-index-url` entries in the generated output file",
            },
            {
              name: "--no-emit-index-url",
            },
            {
              name: "--emit-find-links",
              description: "Include `--find-links` entries in the generated output file",
            },
            {
              name: "--no-emit-find-links",
            },
            {
              name: "--emit-build-options",
              description: "Include `--no-binary` and `--only-binary` entries in the generated output file",
            },
            {
              name: "--no-emit-build-options",
            },
            {
              name: "--emit-marker-expression",
              description: "Whether to emit a marker string indicating when it is known that the resulting set of pinned dependencies is valid",
            },
            {
              name: "--no-emit-marker-expression",
            },
            {
              name: "--emit-index-annotation",
              description: "Include comment annotations indicating the index used to resolve each package (e.g., `# from https://pypi.org/simple`)",
            },
            {
              name: "--no-emit-index-annotation",
            },
            {
              name: "--allow-unsafe",
            },
            {
              name: "--no-allow-unsafe",
            },
            {
              name: "--reuse-hashes",
            },
            {
              name: "--no-reuse-hashes",
            },
            {
              name: "--emit-trusted-host",
            },
            {
              name: "--no-emit-trusted-host",
            },
            {
              name: "--no-config",
            },
            {
              name: "--emit-options",
            },
            {
              name: "--no-emit-options",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "src_file",
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "sync",
          description: "Sync an environment with a `requirements.txt` file",
          options: [
            {
              name: ["-c", "--constraint"],
              description: "Constrain versions using the given requirements files",
              isRepeatable: true,
              args: {
                name: "constraint",
                isOptional: true,
              },
            },
            {
              name: ["-b", "--build-constraint"],
              description: "Constrain build dependencies using the given requirements files when building source distributions",
              isRepeatable: true,
              args: {
                name: "build_constraint",
                isOptional: true,
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: "--reinstall-package",
              description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "reinstall_package",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: ["-C", "--config-setting"],
              description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
              isRepeatable: true,
              args: {
                name: "config_setting",
                isOptional: true,
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: "--link-mode",
              description: "The method to use when installing packages from the global cache",
              isRepeatable: true,
              args: {
                name: "link_mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "clone",
                    description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "copy",
                    description: "Copy packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "hardlink",
                    description: "Hard link packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "symlink",
                    description: "Symbolically link packages from the wheel into the `site-packages` directory",
                  },
                ],
              },
            },
            {
              name: "--refresh-package",
              description: "Refresh cached data for a specific package",
              isRepeatable: true,
              args: {
                name: "refresh_package",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter into which packages should be installed",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--target",
              description: "Install packages into the specified directory, rather than into the virtual or system Python environment. The packages will be installed at the top-level of the directory",
              exclusiveOn: [
                "--prefix",
              ],
              isRepeatable: true,
              args: {
                name: "target",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--prefix",
              description: "Install packages into `lib`, `bin`, and other top-level folders under the specified directory, as if a virtual environment were present at that location",
              exclusiveOn: [
                "--target",
              ],
              isRepeatable: true,
              args: {
                name: "prefix",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--no-binary",
              description: "Don't install pre-built wheels",
              exclusiveOn: [
                "--no-build",
              ],
              isRepeatable: true,
              args: {
                name: "no_binary",
                isOptional: true,
              },
            },
            {
              name: "--only-binary",
              description: "Only use pre-built wheels; don't build source distributions",
              exclusiveOn: [
                "--no-build",
              ],
              isRepeatable: true,
              args: {
                name: "only_binary",
                isOptional: true,
              },
            },
            {
              name: "--python-version",
              description: "The minimum Python version that should be supported by the requirements (e.g., `3.7` or `3.7.9`)",
              isRepeatable: true,
              args: {
                name: "python_version",
                isOptional: true,
              },
            },
            {
              name: "--python-platform",
              description: "The platform for which requirements should be installed",
              isRepeatable: true,
              args: {
                name: "python_platform",
                isOptional: true,
                suggestions: [
                  {
                    name: "windows",
                    description: "An alias for `x86_64-pc-windows-msvc`, the default target for Windows",
                  },
                  {
                    name: "linux",
                    description: "An alias for `x86_64-unknown-linux-gnu`, the default target for Linux",
                  },
                  {
                    name: "macos",
                    description: "An alias for `aarch64-apple-darwin`, the default target for macOS",
                  },
                  {
                    name: "x86_64-pc-windows-msvc",
                    description: "A 64-bit x86 Windows target",
                  },
                  {
                    name: "i686-pc-windows-msvc",
                    description: "A 32-bit x86 Windows target",
                  },
                  {
                    name: "x86_64-unknown-linux-gnu",
                    description: "An x86 Linux target. Equivalent to `x86_64-manylinux_2_17`",
                  },
                  {
                    name: "aarch64-apple-darwin",
                    description: "An ARM-based macOS target, as seen on Apple Silicon devices",
                  },
                  {
                    name: "x86_64-apple-darwin",
                    description: "An x86 macOS target",
                  },
                  {
                    name: "aarch64-unknown-linux-gnu",
                    description: "An ARM64 Linux target. Equivalent to `aarch64-manylinux_2_17`",
                  },
                  {
                    name: "aarch64-unknown-linux-musl",
                    description: "An ARM64 Linux target",
                  },
                  {
                    name: "x86_64-unknown-linux-musl",
                    description: "An `x86_64` Linux target",
                  },
                  {
                    name: "x86_64-manylinux_2_17",
                    description: "An `x86_64` target for the `manylinux_2_17` platform",
                  },
                  {
                    name: "x86_64-manylinux_2_28",
                    description: "An `x86_64` target for the `manylinux_2_28` platform",
                  },
                  {
                    name: "x86_64-manylinux_2_31",
                    description: "An `x86_64` target for the `manylinux_2_31` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_17",
                    description: "An ARM64 target for the `manylinux_2_17` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_28",
                    description: "An ARM64 target for the `manylinux_2_28` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_31",
                    description: "An ARM64 target for the `manylinux_2_31` platform",
                  },
                ],
              },
            },
            {
              name: "--python-executable",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_executable",
                isOptional: true,
              },
            },
            {
              name: "--cert",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "cert",
                isOptional: true,
              },
            },
            {
              name: "--client-cert",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "client_cert",
                isOptional: true,
              },
            },
            {
              name: "--config",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "config",
                isOptional: true,
              },
            },
            {
              name: "--pip-args",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "pip_args",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: "--reinstall",
              description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
            },
            {
              name: "--no-reinstall",
            },
            {
              name: "--no-build-isolation",
              description: "Disable isolation when building source distributions",
            },
            {
              name: "--build-isolation",
            },
            {
              name: "--compile-bytecode",
              description: "Compile Python files to bytecode after installation",
            },
            {
              name: "--no-compile-bytecode",
            },
            {
              name: "--no-sources",
              description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
            },
            {
              name: "--refresh",
              description: "Refresh all cached data",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-refresh",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--require-hashes",
              description: "Require a matching hash for each requirement",
            },
            {
              name: "--no-require-hashes",
            },
            {
              name: "--verify-hashes",
              description: "Validate any hashes provided in the requirements file",
            },
            {
              name: "--no-verify-hashes",
            },
            {
              name: "--system",
              description: "Install packages into the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: "--break-system-packages",
              description: "Allow uv to modify an `EXTERNALLY-MANAGED` Python installation",
            },
            {
              name: "--no-break-system-packages",
            },
            {
              name: "--no-build",
              description: "Don't build source distributions",
              exclusiveOn: [
                "--no-binary",
                "--only-binary",
              ],
            },
            {
              name: "--build",
              exclusiveOn: [
                "--no-binary",
                "--only-binary",
              ],
            },
            {
              name: "--allow-empty-requirements",
              description: "Allow sync of empty requirements, which will clear the environment of all packages",
            },
            {
              name: "--no-allow-empty-requirements",
            },
            {
              name: "--strict",
              description: "Validate the Python environment after completing the installation, to detect packages with missing dependencies or other issues",
            },
            {
              name: "--no-strict",
            },
            {
              name: "--dry-run",
              description: "Perform a dry run, i.e., don't actually install anything but resolve the dependencies and print the resulting plan",
            },
            {
              name: ["-a", "--ask"],
            },
            {
              name: "--user",
            },
            {
              name: "--no-config",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "src_file",
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "install",
          description: "Install packages into an environment",
          options: [
            {
              name: ["-r", "--requirement"],
              description: "Install all packages listed in the given `requirements.txt` files",
              isRepeatable: true,
              args: {
                name: "requirement",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-e", "--editable"],
              description: "Install the editable package based on the provided local file path",
              isRepeatable: true,
              args: {
                name: "editable",
                isOptional: true,
              },
            },
            {
              name: ["-c", "--constraint"],
              description: "Constrain versions using the given requirements files",
              isRepeatable: true,
              args: {
                name: "constraint",
                isOptional: true,
              },
            },
            {
              name: "--override",
              description: "Override versions using the given requirements files",
              isRepeatable: true,
              args: {
                name: "override",
                isOptional: true,
              },
            },
            {
              name: ["-b", "--build-constraint"],
              description: "Constrain build dependencies using the given requirements files when building source distributions",
              isRepeatable: true,
              args: {
                name: "build_constraint",
                isOptional: true,
              },
            },
            {
              name: "--extra",
              description: "Include optional dependencies from the specified extra name; may be provided more than once",
              exclusiveOn: [
                "--all-extras",
              ],
              isRepeatable: true,
              args: {
                name: "extra",
                isOptional: true,
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: ["-P", "--upgrade-package"],
              description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "upgrade_package",
                isOptional: true,
              },
            },
            {
              name: "--reinstall-package",
              description: "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
              isRepeatable: true,
              args: {
                name: "reinstall_package",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--resolution",
              description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
              isRepeatable: true,
              args: {
                name: "resolution",
                isOptional: true,
                suggestions: [
                  {
                    name: "highest",
                    description: "Resolve the highest compatible version of each package",
                  },
                  {
                    name: "lowest",
                    description: "Resolve the lowest compatible version of each package",
                  },
                  {
                    name: "lowest-direct",
                    description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
                  },
                ],
              },
            },
            {
              name: "--prerelease",
              description: "The strategy to use when considering pre-release versions",
              isRepeatable: true,
              args: {
                name: "prerelease",
                isOptional: true,
                suggestions: [
                  {
                    name: "disallow",
                    description: "Disallow all pre-release versions",
                  },
                  {
                    name: "allow",
                    description: "Allow all pre-release versions",
                  },
                  {
                    name: "if-necessary",
                    description: "Allow pre-release versions if all versions of a package are pre-release",
                  },
                  {
                    name: "explicit",
                    description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
                  },
                  {
                    name: "if-necessary-or-explicit",
                    description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
                  },
                ],
              },
            },
            {
              name: ["-C", "--config-setting"],
              description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
              isRepeatable: true,
              args: {
                name: "config_setting",
                isOptional: true,
              },
            },
            {
              name: "--no-build-isolation-package",
              description: "Disable isolation when building source distributions for a specific package",
              isRepeatable: true,
              args: {
                name: "no_build_isolation_package",
                isOptional: true,
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: "--link-mode",
              description: "The method to use when installing packages from the global cache",
              isRepeatable: true,
              args: {
                name: "link_mode",
                isOptional: true,
                suggestions: [
                  {
                    name: "clone",
                    description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "copy",
                    description: "Copy packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "hardlink",
                    description: "Hard link packages from the wheel into the `site-packages` directory",
                  },
                  {
                    name: "symlink",
                    description: "Symbolically link packages from the wheel into the `site-packages` directory",
                  },
                ],
              },
            },
            {
              name: "--refresh-package",
              description: "Refresh cached data for a specific package",
              isRepeatable: true,
              args: {
                name: "refresh_package",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter into which packages should be installed",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--target",
              description: "Install packages into the specified directory, rather than into the virtual or system Python environment. The packages will be installed at the top-level of the directory",
              exclusiveOn: [
                "--prefix",
              ],
              isRepeatable: true,
              args: {
                name: "target",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--prefix",
              description: "Install packages into `lib`, `bin`, and other top-level folders under the specified directory, as if a virtual environment were present at that location",
              exclusiveOn: [
                "--target",
              ],
              isRepeatable: true,
              args: {
                name: "prefix",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--no-binary",
              description: "Don't install pre-built wheels",
              exclusiveOn: [
                "--no-build",
              ],
              isRepeatable: true,
              args: {
                name: "no_binary",
                isOptional: true,
              },
            },
            {
              name: "--only-binary",
              description: "Only use pre-built wheels; don't build source distributions",
              exclusiveOn: [
                "--no-build",
              ],
              isRepeatable: true,
              args: {
                name: "only_binary",
                isOptional: true,
              },
            },
            {
              name: "--python-version",
              description: "The minimum Python version that should be supported by the requirements (e.g., `3.7` or `3.7.9`)",
              isRepeatable: true,
              args: {
                name: "python_version",
                isOptional: true,
              },
            },
            {
              name: "--python-platform",
              description: "The platform for which requirements should be installed",
              isRepeatable: true,
              args: {
                name: "python_platform",
                isOptional: true,
                suggestions: [
                  {
                    name: "windows",
                    description: "An alias for `x86_64-pc-windows-msvc`, the default target for Windows",
                  },
                  {
                    name: "linux",
                    description: "An alias for `x86_64-unknown-linux-gnu`, the default target for Linux",
                  },
                  {
                    name: "macos",
                    description: "An alias for `aarch64-apple-darwin`, the default target for macOS",
                  },
                  {
                    name: "x86_64-pc-windows-msvc",
                    description: "A 64-bit x86 Windows target",
                  },
                  {
                    name: "i686-pc-windows-msvc",
                    description: "A 32-bit x86 Windows target",
                  },
                  {
                    name: "x86_64-unknown-linux-gnu",
                    description: "An x86 Linux target. Equivalent to `x86_64-manylinux_2_17`",
                  },
                  {
                    name: "aarch64-apple-darwin",
                    description: "An ARM-based macOS target, as seen on Apple Silicon devices",
                  },
                  {
                    name: "x86_64-apple-darwin",
                    description: "An x86 macOS target",
                  },
                  {
                    name: "aarch64-unknown-linux-gnu",
                    description: "An ARM64 Linux target. Equivalent to `aarch64-manylinux_2_17`",
                  },
                  {
                    name: "aarch64-unknown-linux-musl",
                    description: "An ARM64 Linux target",
                  },
                  {
                    name: "x86_64-unknown-linux-musl",
                    description: "An `x86_64` Linux target",
                  },
                  {
                    name: "x86_64-manylinux_2_17",
                    description: "An `x86_64` target for the `manylinux_2_17` platform",
                  },
                  {
                    name: "x86_64-manylinux_2_28",
                    description: "An `x86_64` target for the `manylinux_2_28` platform",
                  },
                  {
                    name: "x86_64-manylinux_2_31",
                    description: "An `x86_64` target for the `manylinux_2_31` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_17",
                    description: "An ARM64 target for the `manylinux_2_17` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_28",
                    description: "An ARM64 target for the `manylinux_2_28` platform",
                  },
                  {
                    name: "aarch64-manylinux_2_31",
                    description: "An ARM64 target for the `manylinux_2_31` platform",
                  },
                ],
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--all-extras",
              description: "Include all optional dependencies",
              exclusiveOn: [
                "--extra",
              ],
            },
            {
              name: "--no-all-extras",
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: ["-U", "--upgrade"],
              description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
            },
            {
              name: "--no-upgrade",
            },
            {
              name: "--reinstall",
              description: "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
            },
            {
              name: "--no-reinstall",
            },
            {
              name: "--pre",
            },
            {
              name: "--no-build-isolation",
              description: "Disable isolation when building source distributions",
            },
            {
              name: "--build-isolation",
            },
            {
              name: "--compile-bytecode",
              description: "Compile Python files to bytecode after installation",
            },
            {
              name: "--no-compile-bytecode",
            },
            {
              name: "--no-sources",
              description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
            },
            {
              name: "--refresh",
              description: "Refresh all cached data",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-refresh",
              exclusiveOn: [
                "--offline",
              ],
            },
            {
              name: "--no-deps",
              description: "Ignore package dependencies, instead only installing those packages explicitly listed on the command line or in the requirements files",
            },
            {
              name: "--deps",
            },
            {
              name: "--require-hashes",
              description: "Require a matching hash for each requirement",
            },
            {
              name: "--no-require-hashes",
            },
            {
              name: "--verify-hashes",
              description: "Validate any hashes provided in the requirements file",
            },
            {
              name: "--no-verify-hashes",
            },
            {
              name: "--system",
              description: "Install packages into the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: "--break-system-packages",
              description: "Allow uv to modify an `EXTERNALLY-MANAGED` Python installation",
            },
            {
              name: "--no-break-system-packages",
            },
            {
              name: "--no-build",
              description: "Don't build source distributions",
              exclusiveOn: [
                "--no-binary",
                "--only-binary",
              ],
            },
            {
              name: "--build",
              exclusiveOn: [
                "--no-binary",
                "--only-binary",
              ],
            },
            {
              name: "--inexact",
              description: "Do not remove extraneous packages present in the environment",
            },
            {
              name: "--exact",
              description: "Perform an exact sync, removing extraneous packages",
            },
            {
              name: "--strict",
              description: "Validate the Python environment after completing the installation, to detect packages with missing dependencies or other issues",
            },
            {
              name: "--no-strict",
            },
            {
              name: "--dry-run",
              description: "Perform a dry run, i.e., don't actually install anything but resolve the dependencies and print the resulting plan",
            },
            {
              name: "--disable-pip-version-check",
            },
            {
              name: "--user",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "package",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "uninstall",
          description: "Uninstall packages from an environment",
          options: [
            {
              name: ["-r", "--requirement"],
              description: "Uninstall all packages listed in the given requirements files",
              isRepeatable: true,
              args: {
                name: "requirement",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter from which packages should be uninstalled",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for remote requirements files",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--target",
              description: "Uninstall packages from the specified `--target` directory",
              exclusiveOn: [
                "--prefix",
              ],
              isRepeatable: true,
              args: {
                name: "target",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--prefix",
              description: "Uninstall packages from the specified `--prefix` directory",
              exclusiveOn: [
                "--target",
              ],
              isRepeatable: true,
              args: {
                name: "prefix",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--system",
              description: "Use the system Python to uninstall packages",
            },
            {
              name: "--no-system",
            },
            {
              name: "--break-system-packages",
              description: "Allow uv to modify an `EXTERNALLY-MANAGED` Python installation",
            },
            {
              name: "--no-break-system-packages",
            },
            {
              name: "--disable-pip-version-check",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "package",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "freeze",
          description: "List, in requirements format, packages installed in an environment",
          options: [
            {
              name: ["-p", "--python"],
              description: "The Python interpreter for which packages should be listed",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--exclude-editable",
              description: "Exclude any editable packages from output",
            },
            {
              name: "--strict",
              description: "Validate the Python environment, to detect packages with missing dependencies and other issues",
            },
            {
              name: "--no-strict",
            },
            {
              name: "--system",
              description: "List packages in the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: "--disable-pip-version-check",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "list",
          description: "List, in tabular format, packages installed in an environment",
          options: [
            {
              name: "--exclude",
              description: "Exclude the specified package(s) from the output",
              isRepeatable: true,
              args: {
                name: "exclude",
                isOptional: true,
              },
            },
            {
              name: "--format",
              description: "Select the output format between: `columns` (default), `freeze`, or `json`",
              isRepeatable: true,
              args: {
                name: "format",
                isOptional: true,
                suggestions: [
                  {
                    name: "columns",
                    description: "Display the list of packages in a human-readable table",
                  },
                  {
                    name: "freeze",
                    description: "Display the list of packages in a `pip freeze`-like format, with one package per line alongside its version",
                  },
                  {
                    name: "json",
                    description: "Display the list of packages in a machine-readable JSON format",
                  },
                ],
              },
            },
            {
              name: "--index",
              description: "The URLs to use when resolving dependencies, in addition to the default index",
              isRepeatable: true,
              args: {
                name: "index",
                isOptional: true,
              },
            },
            {
              name: "--default-index",
              description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "default_index",
                isOptional: true,
              },
            },
            {
              name: ["-i", "--index-url"],
              description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
              isRepeatable: true,
              args: {
                name: "index_url",
                isOptional: true,
              },
            },
            {
              name: "--extra-index-url",
              description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
              isRepeatable: true,
              args: {
                name: "extra_index_url",
                isOptional: true,
              },
            },
            {
              name: ["-f", "--find-links"],
              description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
              isRepeatable: true,
              args: {
                name: "find_links",
                isOptional: true,
              },
            },
            {
              name: "--index-strategy",
              description: "The strategy to use when resolving against multiple index URLs",
              isRepeatable: true,
              args: {
                name: "index_strategy",
                isOptional: true,
                suggestions: [
                  {
                    name: "first-index",
                    description: "Only use results from the first index that returns a match for a given package name",
                  },
                  {
                    name: "unsafe-first-match",
                    description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
                  },
                  {
                    name: "unsafe-best-match",
                    description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
                  },
                ],
              },
            },
            {
              name: "--keyring-provider",
              description: "Attempt to use `keyring` for authentication for index URLs",
              isRepeatable: true,
              args: {
                name: "keyring_provider",
                isOptional: true,
                suggestions: [
                  {
                    name: "disabled",
                    description: "Do not use keyring for credential lookup",
                  },
                  {
                    name: "subprocess",
                    description: "Use the `keyring` command for credential lookup",
                  },
                ],
              },
            },
            {
              name: "--exclude-newer",
              description: "Limit candidate packages to those that were uploaded prior to the given date",
              isRepeatable: true,
              args: {
                name: "exclude_newer",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter for which packages should be listed",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-e", "--editable"],
              description: "Only include editable projects",
            },
            {
              name: "--exclude-editable",
              description: "Exclude any editable packages from output",
              exclusiveOn: [
                "-e",
                "--editable",
              ],
            },
            {
              name: "--outdated",
              description: "List outdated packages",
            },
            {
              name: "--no-outdated",
            },
            {
              name: "--strict",
              description: "Validate the Python environment, to detect packages with missing dependencies and other issues",
            },
            {
              name: "--no-strict",
            },
            {
              name: "--no-index",
              description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
            },
            {
              name: "--system",
              description: "List packages in the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: "--disable-pip-version-check",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "show",
          description: "Show information about one or more installed packages",
          options: [
            {
              name: ["-p", "--python"],
              description: "The Python interpreter to find the package in",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--strict",
              description: "Validate the Python environment, to detect packages with missing dependencies and other issues",
            },
            {
              name: "--no-strict",
            },
            {
              name: ["-f", "--files"],
              description: "Show the full list of installed files for each package",
            },
            {
              name: "--system",
              description: "Show a package in the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: "--disable-pip-version-check",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "package",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "tree",
          description: "Display the dependency tree for an environment",
          options: [
            {
              name: ["-d", "--depth"],
              description: "Maximum display depth of the dependency tree",
              isRepeatable: true,
              args: {
                name: "depth",
                isOptional: true,
              },
            },
            {
              name: "--prune",
              description: "Prune the given package from the display of the dependency tree",
              isRepeatable: true,
              args: {
                name: "prune",
                isOptional: true,
              },
            },
            {
              name: "--package",
              description: "Display only the specified packages",
              isRepeatable: true,
              args: {
                name: "package",
                isOptional: true,
              },
            },
            {
              name: ["-p", "--python"],
              description: "The Python interpreter for which packages should be listed",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--show-version-specifiers",
              description: "Show the version constraint(s) imposed on each package",
            },
            {
              name: "--no-dedupe",
              description: "Do not de-duplicate repeated dependencies. Usually, when a package has already displayed its dependencies, further occurrences will not re-display its dependencies, and will include a (*) to indicate it has already been shown. This flag will cause those duplicates to be repeated",
            },
            {
              name: "--invert",
              description: "Show the reverse dependencies for the given package. This flag will invert the tree and display the packages that depend on the given package",
            },
            {
              name: "--outdated",
              description: "Show the latest available version of each package in the tree",
            },
            {
              name: "--strict",
              description: "Validate the Python environment, to detect packages with missing dependencies and other issues",
            },
            {
              name: "--no-strict",
            },
            {
              name: "--system",
              description: "List packages in the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: "--disable-pip-version-check",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "check",
          description: "Verify installed packages have compatible dependencies",
          options: [
            {
              name: ["-p", "--python"],
              description: "The Python interpreter for which packages should be checked",
              isRepeatable: true,
              args: {
                name: "python",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--system",
              description: "Check packages in the system Python environment",
            },
            {
              name: "--no-system",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
      ],
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: ["venv", "virtualenv", "v"],
      description: "Create a virtual environment",
      options: [
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use for the virtual environment",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--prompt",
          description: "Provide an alternative prompt prefix for the virtual environment",
          isRepeatable: true,
          args: {
            name: "prompt",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--system",
          description: "Ignore virtual environments when searching for the Python interpreter",
        },
        {
          name: "--no-system",
          description: "This flag is included for compatibility only, it has no effect",
        },
        {
          name: "--no-project",
          description: "Avoid discovering a project or workspace",
        },
        {
          name: "--seed",
          description: "Install seed packages (one or more of: `pip`, `setuptools`, and `wheel`) into the virtual environment",
        },
        {
          name: "--allow-existing",
          description: "Preserve any existing files or directories at the target path",
        },
        {
          name: "--system-site-packages",
          description: "Give the virtual environment access to the system site packages directory",
        },
        {
          name: "--relocatable",
          description: "Make the virtual environment relocatable",
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: "--clear",
        },
        {
          name: "--no-seed",
        },
        {
          name: "--no-pip",
        },
        {
          name: "--no-setuptools",
        },
        {
          name: "--no-wheel",
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "path",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "build",
      description: "Build Python packages into source distributions and wheels",
      options: [
        {
          name: "--package",
          description: "Build a specific package in the workspace",
          exclusiveOn: [
            "--all-packages",
          ],
          isRepeatable: true,
          args: {
            name: "package",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--out-dir"],
          description: "The output directory to which distributions should be written",
          isRepeatable: true,
          args: {
            name: "out_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-b", "--build-constraint"],
          description: "Constrain build dependencies using the given requirements files when building distributions",
          isRepeatable: true,
          args: {
            name: "build_constraint",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--python"],
          description: "The Python interpreter to use for the build environment",
          isRepeatable: true,
          args: {
            name: "python",
            isOptional: true,
          },
        },
        {
          name: "--index",
          description: "The URLs to use when resolving dependencies, in addition to the default index",
          isRepeatable: true,
          args: {
            name: "index",
            isOptional: true,
          },
        },
        {
          name: "--default-index",
          description: "The URL of the default package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "default_index",
            isOptional: true,
          },
        },
        {
          name: ["-i", "--index-url"],
          description: "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
          isRepeatable: true,
          args: {
            name: "index_url",
            isOptional: true,
          },
        },
        {
          name: "--extra-index-url",
          description: "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
          isRepeatable: true,
          args: {
            name: "extra_index_url",
            isOptional: true,
          },
        },
        {
          name: ["-f", "--find-links"],
          description: "Locations to search for candidate distributions, in addition to those found in the registry indexes",
          isRepeatable: true,
          args: {
            name: "find_links",
            isOptional: true,
          },
        },
        {
          name: ["-P", "--upgrade-package"],
          description: "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
          isRepeatable: true,
          args: {
            name: "upgrade_package",
            isOptional: true,
          },
        },
        {
          name: "--index-strategy",
          description: "The strategy to use when resolving against multiple index URLs",
          isRepeatable: true,
          args: {
            name: "index_strategy",
            isOptional: true,
            suggestions: [
              {
                name: "first-index",
                description: "Only use results from the first index that returns a match for a given package name",
              },
              {
                name: "unsafe-first-match",
                description: "Search for every package name across all indexes, exhausting the versions from the first index before moving on to the next",
              },
              {
                name: "unsafe-best-match",
                description: "Search for every package name across all indexes, preferring the \"best\" version found. If a package version is in multiple indexes, only look at the entry for the first index",
              },
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for index URLs",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--resolution",
          description: "The strategy to use when selecting between the different compatible versions for a given package requirement",
          isRepeatable: true,
          args: {
            name: "resolution",
            isOptional: true,
            suggestions: [
              {
                name: "highest",
                description: "Resolve the highest compatible version of each package",
              },
              {
                name: "lowest",
                description: "Resolve the lowest compatible version of each package",
              },
              {
                name: "lowest-direct",
                description: "Resolve the lowest compatible version of any direct dependencies, and the highest compatible version of any transitive dependencies",
              },
            ],
          },
        },
        {
          name: "--prerelease",
          description: "The strategy to use when considering pre-release versions",
          isRepeatable: true,
          args: {
            name: "prerelease",
            isOptional: true,
            suggestions: [
              {
                name: "disallow",
                description: "Disallow all pre-release versions",
              },
              {
                name: "allow",
                description: "Allow all pre-release versions",
              },
              {
                name: "if-necessary",
                description: "Allow pre-release versions if all versions of a package are pre-release",
              },
              {
                name: "explicit",
                description: "Allow pre-release versions for first-party packages with explicit pre-release markers in their version requirements",
              },
              {
                name: "if-necessary-or-explicit",
                description: "Allow pre-release versions if all versions of a package are pre-release, or if the package has an explicit pre-release marker in its version requirements",
              },
            ],
          },
        },
        {
          name: ["-C", "--config-setting"],
          description: "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
          isRepeatable: true,
          args: {
            name: "config_setting",
            isOptional: true,
          },
        },
        {
          name: "--no-build-isolation-package",
          description: "Disable isolation when building source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_isolation_package",
            isOptional: true,
          },
        },
        {
          name: "--exclude-newer",
          description: "Limit candidate packages to those that were uploaded prior to the given date",
          isRepeatable: true,
          args: {
            name: "exclude_newer",
            isOptional: true,
          },
        },
        {
          name: "--link-mode",
          description: "The method to use when installing packages from the global cache",
          isRepeatable: true,
          args: {
            name: "link_mode",
            isOptional: true,
            suggestions: [
              {
                name: "clone",
                description: "Clone (i.e., copy-on-write) packages from the wheel into the `site-packages` directory",
              },
              {
                name: "copy",
                description: "Copy packages from the wheel into the `site-packages` directory",
              },
              {
                name: "hardlink",
                description: "Hard link packages from the wheel into the `site-packages` directory",
              },
              {
                name: "symlink",
                description: "Symbolically link packages from the wheel into the `site-packages` directory",
              },
            ],
          },
        },
        {
          name: "--no-build-package",
          description: "Don't build source distributions for a specific package",
          isRepeatable: true,
          args: {
            name: "no_build_package",
            isOptional: true,
          },
        },
        {
          name: "--no-binary-package",
          description: "Don't install pre-built wheels for a specific package",
          isRepeatable: true,
          args: {
            name: "no_binary_package",
            isOptional: true,
          },
        },
        {
          name: "--refresh-package",
          description: "Refresh cached data for a specific package",
          isRepeatable: true,
          args: {
            name: "refresh_package",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--all-packages",
          description: "Builds all packages in the workspace",
          exclusiveOn: [
            "--package",
          ],
        },
        {
          name: "--sdist",
          description: "Build a source distribution (\"sdist\") from the given directory",
        },
        {
          name: "--wheel",
          description: "Build a binary distribution (\"wheel\") from the given directory",
        },
        {
          name: "--build-logs",
        },
        {
          name: "--no-build-logs",
          description: "Hide logs from the build backend",
        },
        {
          name: "--require-hashes",
          description: "Require a matching hash for each build requirement",
        },
        {
          name: "--no-require-hashes",
        },
        {
          name: "--verify-hashes",
          description: "Validate any hashes provided in the build constraints file",
        },
        {
          name: "--no-verify-hashes",
        },
        {
          name: "--no-index",
          description: "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
        },
        {
          name: ["-U", "--upgrade"],
          description: "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
        },
        {
          name: "--no-upgrade",
        },
        {
          name: "--pre",
        },
        {
          name: "--no-build-isolation",
          description: "Disable isolation when building source distributions",
        },
        {
          name: "--build-isolation",
        },
        {
          name: "--no-sources",
          description: "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
        },
        {
          name: "--no-build",
          description: "Don't build source distributions",
        },
        {
          name: "--build",
        },
        {
          name: "--no-binary",
          description: "Don't install pre-built wheels",
        },
        {
          name: "--binary",
        },
        {
          name: "--refresh",
          description: "Refresh all cached data",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: "--no-refresh",
          exclusiveOn: [
            "--offline",
          ],
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "src",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "publish",
      description: "Upload distributions to an index",
      options: [
        {
          name: "--publish-url",
          description: "The URL of the upload endpoint (not the index URL)",
          isRepeatable: true,
          args: {
            name: "publish_url",
            isOptional: true,
          },
        },
        {
          name: ["-u", "--username"],
          description: "The username for the upload",
          isRepeatable: true,
          args: {
            name: "username",
            isOptional: true,
          },
        },
        {
          name: ["-p", "--password"],
          description: "The password for the upload",
          isRepeatable: true,
          args: {
            name: "password",
            isOptional: true,
          },
        },
        {
          name: ["-t", "--token"],
          description: "The token for the upload",
          exclusiveOn: [
            "-u",
            "--username",
            "-p",
            "--password",
          ],
          isRepeatable: true,
          args: {
            name: "token",
            isOptional: true,
          },
        },
        {
          name: "--trusted-publishing",
          description: "Configure using trusted publishing through GitHub Actions",
          isRepeatable: true,
          args: {
            name: "trusted_publishing",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Try trusted publishing when we're already in GitHub Actions, continue if that fails",
              },
              "always",
              "never",
            ],
          },
        },
        {
          name: "--keyring-provider",
          description: "Attempt to use `keyring` for authentication for remote requirements files",
          isRepeatable: true,
          args: {
            name: "keyring_provider",
            isOptional: true,
            suggestions: [
              {
                name: "disabled",
                description: "Do not use keyring for credential lookup",
              },
              {
                name: "subprocess",
                description: "Use the `keyring` command for credential lookup",
              },
            ],
          },
        },
        {
          name: "--check-url",
          description: "Check an index URL for existing files to skip duplicate uploads",
          isRepeatable: true,
          args: {
            name: "check_url",
            isOptional: true,
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--skip-existing",
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "build-backend",
      description: "The implementation of the build backend",
      hidden: true,
      subcommands: [
        {
          name: "build-sdist",
          description: "PEP 517 hook `build_sdist`",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "sdist_directory",
            template: "filepaths",
          },
        },
        {
          name: "build-wheel",
          description: "PEP 517 hook `build_wheel`",
          options: [
            {
              name: "--metadata-directory",
              isRepeatable: true,
              args: {
                name: "metadata_directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "wheel_directory",
            template: "filepaths",
          },
        },
        {
          name: "build-editable",
          description: "PEP 660 hook `build_editable`",
          options: [
            {
              name: "--metadata-directory",
              isRepeatable: true,
              args: {
                name: "metadata_directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "wheel_directory",
            template: "filepaths",
          },
        },
        {
          name: "get-requires-for-build-sdist",
          description: "PEP 517 hook `get_requires_for_build_sdist`",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "get-requires-for-build-wheel",
          description: "PEP 517 hook `get_requires_for_build_wheel`",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "prepare-metadata-for-build-wheel",
          description: "PEP 517 hook `prepare_metadata_for_build_wheel`",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "wheel_directory",
            template: "filepaths",
          },
        },
        {
          name: "get-requires-for-build-editable",
          description: "PEP 660 hook `get_requires_for_build_editable`",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "prepare-metadata-for-build-editable",
          description: "PEP 660 hook `prepare_metadata_for_build_editable`",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "wheel_directory",
            template: "filepaths",
          },
        },
      ],
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "cache",
      description: "Manage uv's cache",
      subcommands: [
        {
          name: "clean",
          description: "Clear the cache, removing all entries or those linked to specific packages",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "package",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "prune",
          description: "Prune all unreachable objects from the cache",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--ci",
              description: "Optimize the cache for persistence in a continuous integration environment, like GitHub Actions",
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
        {
          name: "dir",
          description: "Show the cache directory",
          options: [
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
        },
      ],
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "self",
      description: "Manage the uv executable",
      subcommands: [
        {
          name: "update",
          description: "Update uv",
          options: [
            {
              name: "--token",
              description: "A GitHub token for authentication. A token is not required but can be used to reduce the chance of encountering rate limits",
              isRepeatable: true,
              args: {
                name: "token",
                isOptional: true,
              },
            },
            {
              name: "--cache-dir",
              description: "Path to the cache directory",
              isRepeatable: true,
              args: {
                name: "cache_dir",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--python-preference",
              description: "Whether to prefer uv-managed or system Python installations",
              isRepeatable: true,
              args: {
                name: "python_preference",
                isOptional: true,
                suggestions: [
                  {
                    name: "only-managed",
                    description: "Only use managed Python installations; never use system Python installations",
                  },
                  {
                    name: "managed",
                    description: "Prefer managed Python installations over system Python installations",
                  },
                  {
                    name: "system",
                    description: "Prefer system Python installations over managed Python installations",
                  },
                  {
                    name: "only-system",
                    description: "Only use system Python installations; never use managed Python installations",
                  },
                ],
              },
            },
            {
              name: "--python-fetch",
              description: "Deprecated version of [`Self::python_downloads`]",
              hidden: true,
              isRepeatable: true,
              args: {
                name: "python_fetch",
                isOptional: true,
                suggestions: [
                  {
                    name: "automatic",
                    description: "Automatically download managed Python installations when needed",
                  },
                  {
                    name: "manual",
                    description: "Do not automatically download managed Python installations; require explicit installation",
                  },
                  {
                    name: "never",
                    description: "Do not ever allow Python downloads",
                  },
                ],
              },
            },
            {
              name: "--color",
              description: "Control colors in output",
              exclusiveOn: [
                "--no-color",
              ],
              isRepeatable: true,
              args: {
                name: "color",
                isOptional: true,
                suggestions: [
                  {
                    name: "auto",
                    description: "Enables colored output only when the output is going to a terminal or TTY with support",
                  },
                  {
                    name: "always",
                    description: "Enables colored output regardless of the detected environment",
                  },
                  {
                    name: "never",
                    description: "Disables colored output",
                  },
                ],
              },
            },
            {
              name: "--allow-insecure-host",
              description: "Allow insecure connections to a host",
              isRepeatable: true,
              args: {
                name: "allow_insecure_host",
                isOptional: true,
              },
            },
            {
              name: "--directory",
              description: "Change to the given directory prior to running the command",
              isRepeatable: true,
              args: {
                name: "directory",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--project",
              description: "Run the command within the given project directory",
              isRepeatable: true,
              args: {
                name: "project",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--config-file",
              description: "The path to a `uv.toml` file to use for configuration",
              isRepeatable: true,
              args: {
                name: "config_file",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: ["-n", "--no-cache"],
              description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
            },
            {
              name: "--allow-python-downloads",
              description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
            },
            {
              name: "--no-python-downloads",
              description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
            },
            {
              name: ["-q", "--quiet"],
              description: "Do not print any output",
              exclusiveOn: [
                "-v",
                "--verbose",
              ],
            },
            {
              name: ["-v", "--verbose"],
              description: "Use verbose output",
              exclusiveOn: [
                "-q",
                "--quiet",
              ],
              isRepeatable: true,
            },
            {
              name: "--no-color",
              description: "Disable colors",
              exclusiveOn: [
                "--color",
              ],
            },
            {
              name: "--native-tls",
              description: "Whether to load TLS certificates from the platform's native certificate store",
            },
            {
              name: "--no-native-tls",
            },
            {
              name: "--offline",
              description: "Disable network access",
            },
            {
              name: "--no-offline",
            },
            {
              name: "--preview",
              description: "Whether to enable experimental, preview features",
            },
            {
              name: "--no-preview",
            },
            {
              name: "--isolated",
              description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
            },
            {
              name: "--show-settings",
              description: "Show the resolved settings for the current command",
            },
            {
              name: "--no-progress",
              description: "Hide all progress outputs",
            },
            {
              name: "--no-config",
              description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
            },
            {
              name: ["-h", "--help"],
              description: "Display the concise help for this command",
            },
            {
              name: ["-V", "--version"],
              description: "Display the uv version",
            },
          ],
          args: {
            name: "target_version",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "clean",
      description: "Clear the cache, removing all entries or those linked to specific packages",
      hidden: true,
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "package",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "version",
      description: "Display uv's version",
      options: [
        {
          name: "--output-format",
          isRepeatable: true,
          args: {
            name: "output_format",
            isOptional: true,
            suggestions: [
              {
                name: "text",
                description: "Display the version as plain text",
              },
              {
                name: "json",
                description: "Display the version as JSON",
              },
            ],
          },
        },
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: ["generate-shell-completion", "--generate-shell-completion"],
      description: "Generate shell completion",
      hidden: true,
      options: [
        {
          name: "--cache-dir",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--color",
          hidden: true,
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--config-file",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
        },
        {
          name: "--no-python-downloads",
        },
        {
          name: ["-q", "--quiet"],
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--native-tls",
        },
        {
          name: "--offline",
        },
        {
          name: "--no-progress",
        },
        {
          name: "--no-config",
        },
        {
          name: ["-h", "--help"],
        },
        {
          name: ["-V", "--version"],
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
      ],
      args: {
        name: "shell",
        suggestions: [
          "bash",
          "elvish",
          "fish",
          "nushell",
          "powershell",
          "zsh",
        ],
      },
    },
    {
      name: ["generate-fig-completion", "--generate-fig-completion"],
      description: "Generate fig completion",
      hidden: true,
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
    },
    {
      name: "help",
      description: "Display documentation for a command",
      options: [
        {
          name: "--cache-dir",
          description: "Path to the cache directory",
          isRepeatable: true,
          args: {
            name: "cache_dir",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--python-preference",
          description: "Whether to prefer uv-managed or system Python installations",
          isRepeatable: true,
          args: {
            name: "python_preference",
            isOptional: true,
            suggestions: [
              {
                name: "only-managed",
                description: "Only use managed Python installations; never use system Python installations",
              },
              {
                name: "managed",
                description: "Prefer managed Python installations over system Python installations",
              },
              {
                name: "system",
                description: "Prefer system Python installations over managed Python installations",
              },
              {
                name: "only-system",
                description: "Only use system Python installations; never use managed Python installations",
              },
            ],
          },
        },
        {
          name: "--python-fetch",
          description: "Deprecated version of [`Self::python_downloads`]",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "python_fetch",
            isOptional: true,
            suggestions: [
              {
                name: "automatic",
                description: "Automatically download managed Python installations when needed",
              },
              {
                name: "manual",
                description: "Do not automatically download managed Python installations; require explicit installation",
              },
              {
                name: "never",
                description: "Do not ever allow Python downloads",
              },
            ],
          },
        },
        {
          name: "--color",
          description: "Control colors in output",
          exclusiveOn: [
            "--no-color",
          ],
          isRepeatable: true,
          args: {
            name: "color",
            isOptional: true,
            suggestions: [
              {
                name: "auto",
                description: "Enables colored output only when the output is going to a terminal or TTY with support",
              },
              {
                name: "always",
                description: "Enables colored output regardless of the detected environment",
              },
              {
                name: "never",
                description: "Disables colored output",
              },
            ],
          },
        },
        {
          name: "--allow-insecure-host",
          description: "Allow insecure connections to a host",
          isRepeatable: true,
          args: {
            name: "allow_insecure_host",
            isOptional: true,
          },
        },
        {
          name: "--directory",
          description: "Change to the given directory prior to running the command",
          isRepeatable: true,
          args: {
            name: "directory",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "Run the command within the given project directory",
          isRepeatable: true,
          args: {
            name: "project",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--config-file",
          description: "The path to a `uv.toml` file to use for configuration",
          isRepeatable: true,
          args: {
            name: "config_file",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-pager",
          description: "Disable pager when printing help",
        },
        {
          name: ["-n", "--no-cache"],
          description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
        },
        {
          name: "--allow-python-downloads",
          description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
        },
        {
          name: "--no-python-downloads",
          description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print any output",
          exclusiveOn: [
            "-v",
            "--verbose",
          ],
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
          exclusiveOn: [
            "-q",
            "--quiet",
          ],
          isRepeatable: true,
        },
        {
          name: "--no-color",
          description: "Disable colors",
          exclusiveOn: [
            "--color",
          ],
        },
        {
          name: "--native-tls",
          description: "Whether to load TLS certificates from the platform's native certificate store",
        },
        {
          name: "--no-native-tls",
        },
        {
          name: "--offline",
          description: "Disable network access",
        },
        {
          name: "--no-offline",
        },
        {
          name: "--preview",
          description: "Whether to enable experimental, preview features",
        },
        {
          name: "--no-preview",
        },
        {
          name: "--isolated",
          description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
        },
        {
          name: "--show-settings",
          description: "Show the resolved settings for the current command",
        },
        {
          name: "--no-progress",
          description: "Hide all progress outputs",
        },
        {
          name: "--no-config",
          description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
        },
        {
          name: ["-h", "--help"],
          description: "Display the concise help for this command",
        },
        {
          name: ["-V", "--version"],
          description: "Display the uv version",
        },
      ],
      args: {
        name: "command",
        isVariadic: true,
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: "--cache-dir",
      description: "Path to the cache directory",
      isRepeatable: true,
      args: {
        name: "cache_dir",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--python-preference",
      description: "Whether to prefer uv-managed or system Python installations",
      isRepeatable: true,
      args: {
        name: "python_preference",
        isOptional: true,
        suggestions: [
          {
            name: "only-managed",
            description: "Only use managed Python installations; never use system Python installations",
          },
          {
            name: "managed",
            description: "Prefer managed Python installations over system Python installations",
          },
          {
            name: "system",
            description: "Prefer system Python installations over managed Python installations",
          },
          {
            name: "only-system",
            description: "Only use system Python installations; never use managed Python installations",
          },
        ],
      },
    },
    {
      name: "--python-fetch",
      description: "Deprecated version of [`Self::python_downloads`]",
      hidden: true,
      isRepeatable: true,
      args: {
        name: "python_fetch",
        isOptional: true,
        suggestions: [
          {
            name: "automatic",
            description: "Automatically download managed Python installations when needed",
          },
          {
            name: "manual",
            description: "Do not automatically download managed Python installations; require explicit installation",
          },
          {
            name: "never",
            description: "Do not ever allow Python downloads",
          },
        ],
      },
    },
    {
      name: "--color",
      description: "Control colors in output",
      exclusiveOn: [
        "--no-color",
      ],
      isRepeatable: true,
      args: {
        name: "color",
        isOptional: true,
        suggestions: [
          {
            name: "auto",
            description: "Enables colored output only when the output is going to a terminal or TTY with support",
          },
          {
            name: "always",
            description: "Enables colored output regardless of the detected environment",
          },
          {
            name: "never",
            description: "Disables colored output",
          },
        ],
      },
    },
    {
      name: "--allow-insecure-host",
      description: "Allow insecure connections to a host",
      isRepeatable: true,
      args: {
        name: "allow_insecure_host",
        isOptional: true,
      },
    },
    {
      name: "--directory",
      description: "Change to the given directory prior to running the command",
      isRepeatable: true,
      args: {
        name: "directory",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--project",
      description: "Run the command within the given project directory",
      isRepeatable: true,
      args: {
        name: "project",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "--config-file",
      description: "The path to a `uv.toml` file to use for configuration",
      isRepeatable: true,
      args: {
        name: "config_file",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: ["-n", "--no-cache"],
      description: "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
    },
    {
      name: "--allow-python-downloads",
      description: "Allow automatically downloading Python when required. [env: \"UV_PYTHON_DOWNLOADS=auto\"]",
    },
    {
      name: "--no-python-downloads",
      description: "Disable automatic downloads of Python. [env: \"UV_PYTHON_DOWNLOADS=never\"]",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not print any output",
      exclusiveOn: [
        "-v",
        "--verbose",
      ],
    },
    {
      name: ["-v", "--verbose"],
      description: "Use verbose output",
      exclusiveOn: [
        "-q",
        "--quiet",
      ],
      isRepeatable: true,
    },
    {
      name: "--no-color",
      description: "Disable colors",
      exclusiveOn: [
        "--color",
      ],
    },
    {
      name: "--native-tls",
      description: "Whether to load TLS certificates from the platform's native certificate store",
    },
    {
      name: "--no-native-tls",
    },
    {
      name: "--offline",
      description: "Disable network access",
    },
    {
      name: "--no-offline",
    },
    {
      name: "--preview",
      description: "Whether to enable experimental, preview features",
    },
    {
      name: "--no-preview",
    },
    {
      name: "--isolated",
      description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
    },
    {
      name: "--show-settings",
      description: "Show the resolved settings for the current command",
    },
    {
      name: "--no-progress",
      description: "Hide all progress outputs",
    },
    {
      name: "--no-config",
      description: "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
    },
    {
      name: ["-h", "--help"],
      description: "Display the concise help for this command",
    },
    {
      name: ["-V", "--version"],
      description: "Display the uv version",
    },
  ],
};

export default completion;
