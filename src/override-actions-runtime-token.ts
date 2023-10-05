import * as core from "@actions/core";

import { Inputs } from "./constants";

const actionsRuntimeToken = core.getInput(Inputs.ActionsRuntimeToken, {
    required: false
});
if (actionsRuntimeToken) {
    process.env["ACTIONS_RUNTIME_TOKEN"] = actionsRuntimeToken;
}
