import {HttpProblems, ZuploContext, ZuploRequest} from "@zuplo/runtime";

type MyPolicyOptionsType = {
  role: string;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  if (request.user.data.roles.includes(options.role)) {
    return request;
  }
  return HttpProblems.forbidden(request, context, { detail: `Declan says get lost!`});
}
