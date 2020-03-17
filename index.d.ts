export = dotenv_expand;

interface DotenvResult {
    ignoreProcessEnv?: boolean;
    parsed?: {
        [name: string]: string;
    };
}

declare function dotenv_expand(config: DotenvResult): DotenvResult;

declare namespace dotenv_expand {
    const prototype: {
    };
}
