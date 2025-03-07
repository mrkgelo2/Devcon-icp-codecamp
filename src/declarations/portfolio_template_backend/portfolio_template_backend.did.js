export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getVisitCount' : IDL.Func([], [IDL.Nat], ['query']),
    'greet' : IDL.Func([], [IDL.Text], ['query']),
    'recordVisit' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
