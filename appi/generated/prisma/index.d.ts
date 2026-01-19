
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Annoucements
 * 
 */
export type Annoucements = $Result.DefaultSelection<Prisma.$AnnoucementsPayload>
/**
 * Model Meeting_Request
 * 
 */
export type Meeting_Request = $Result.DefaultSelection<Prisma.$Meeting_RequestPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Academics
 * 
 */
export type Academics = $Result.DefaultSelection<Prisma.$AcademicsPayload>
/**
 * Model ChatMessages
 * 
 */
export type ChatMessages = $Result.DefaultSelection<Prisma.$ChatMessagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Parent: 'Parent',
  Teacher: 'Teacher',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  Unverified: 'Unverified',
  Rejected: 'Rejected',
  Successfull: 'Successfull'
};

export type Status = (typeof Status)[keyof typeof Status]


export const StatusMeet: {
  Pending: 'Pending',
  Rejected: 'Rejected',
  Approved: 'Approved'
};

export type StatusMeet = (typeof StatusMeet)[keyof typeof StatusMeet]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type StatusMeet = $Enums.StatusMeet

export const StatusMeet: typeof $Enums.StatusMeet

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annoucements`: Exposes CRUD operations for the **Annoucements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annoucements
    * const annoucements = await prisma.annoucements.findMany()
    * ```
    */
  get annoucements(): Prisma.AnnoucementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting_Request`: Exposes CRUD operations for the **Meeting_Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meeting_Requests
    * const meeting_Requests = await prisma.meeting_Request.findMany()
    * ```
    */
  get meeting_Request(): Prisma.Meeting_RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academics`: Exposes CRUD operations for the **Academics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Academics
    * const academics = await prisma.academics.findMany()
    * ```
    */
  get academics(): Prisma.AcademicsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessages`: Exposes CRUD operations for the **ChatMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessages.findMany()
    * ```
    */
  get chatMessages(): Prisma.ChatMessagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Parent: 'Parent',
    Teacher: 'Teacher',
    Subject: 'Subject',
    Class: 'Class',
    Annoucements: 'Annoucements',
    Meeting_Request: 'Meeting_Request',
    Attendance: 'Attendance',
    Academics: 'Academics',
    ChatMessages: 'ChatMessages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "parent" | "teacher" | "subject" | "class" | "annoucements" | "meeting_Request" | "attendance" | "academics" | "chatMessages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Annoucements: {
        payload: Prisma.$AnnoucementsPayload<ExtArgs>
        fields: Prisma.AnnoucementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnoucementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnoucementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload>
          }
          findFirst: {
            args: Prisma.AnnoucementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnoucementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload>
          }
          findMany: {
            args: Prisma.AnnoucementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload>[]
          }
          create: {
            args: Prisma.AnnoucementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload>
          }
          createMany: {
            args: Prisma.AnnoucementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnnoucementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload>
          }
          update: {
            args: Prisma.AnnoucementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload>
          }
          deleteMany: {
            args: Prisma.AnnoucementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnoucementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnnoucementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoucementsPayload>
          }
          aggregate: {
            args: Prisma.AnnoucementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnoucements>
          }
          groupBy: {
            args: Prisma.AnnoucementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnoucementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnoucementsCountArgs<ExtArgs>
            result: $Utils.Optional<AnnoucementsCountAggregateOutputType> | number
          }
        }
      }
      Meeting_Request: {
        payload: Prisma.$Meeting_RequestPayload<ExtArgs>
        fields: Prisma.Meeting_RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Meeting_RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Meeting_RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload>
          }
          findFirst: {
            args: Prisma.Meeting_RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Meeting_RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload>
          }
          findMany: {
            args: Prisma.Meeting_RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload>[]
          }
          create: {
            args: Prisma.Meeting_RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload>
          }
          createMany: {
            args: Prisma.Meeting_RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Meeting_RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload>
          }
          update: {
            args: Prisma.Meeting_RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload>
          }
          deleteMany: {
            args: Prisma.Meeting_RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Meeting_RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Meeting_RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meeting_RequestPayload>
          }
          aggregate: {
            args: Prisma.Meeting_RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting_Request>
          }
          groupBy: {
            args: Prisma.Meeting_RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meeting_RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.Meeting_RequestCountArgs<ExtArgs>
            result: $Utils.Optional<Meeting_RequestCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Academics: {
        payload: Prisma.$AcademicsPayload<ExtArgs>
        fields: Prisma.AcademicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload>
          }
          findFirst: {
            args: Prisma.AcademicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload>
          }
          findMany: {
            args: Prisma.AcademicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload>[]
          }
          create: {
            args: Prisma.AcademicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload>
          }
          createMany: {
            args: Prisma.AcademicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AcademicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload>
          }
          update: {
            args: Prisma.AcademicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload>
          }
          deleteMany: {
            args: Prisma.AcademicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcademicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicsPayload>
          }
          aggregate: {
            args: Prisma.AcademicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademics>
          }
          groupBy: {
            args: Prisma.AcademicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicsCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicsCountAggregateOutputType> | number
          }
        }
      }
      ChatMessages: {
        payload: Prisma.$ChatMessagesPayload<ExtArgs>
        fields: Prisma.ChatMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findFirst: {
            args: Prisma.ChatMessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findMany: {
            args: Prisma.ChatMessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>[]
          }
          create: {
            args: Prisma.ChatMessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          createMany: {
            args: Prisma.ChatMessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatMessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          update: {
            args: Prisma.ChatMessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          deleteMany: {
            args: Prisma.ChatMessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          aggregate: {
            args: Prisma.ChatMessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessages>
          }
          groupBy: {
            args: Prisma.ChatMessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessagesCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    parent?: ParentOmit
    teacher?: TeacherOmit
    subject?: SubjectOmit
    class?: ClassOmit
    annoucements?: AnnoucementsOmit
    meeting_Request?: Meeting_RequestOmit
    attendance?: AttendanceOmit
    academics?: AcademicsOmit
    chatMessages?: ChatMessagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    MeetReqSend: number
    Attendance: number
    Academics: number
    ChatMessages: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetReqSend?: boolean | ParentCountOutputTypeCountMeetReqSendArgs
    Attendance?: boolean | ParentCountOutputTypeCountAttendanceArgs
    Academics?: boolean | ParentCountOutputTypeCountAcademicsArgs
    ChatMessages?: boolean | ParentCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountMeetReqSendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Meeting_RequestWhereInput
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountAcademicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicsWhereInput
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    MeetReqRecieve: number
    Subjects: number
    ChatMessages: number
    Announcements: number
    Academics: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetReqRecieve?: boolean | TeacherCountOutputTypeCountMeetReqRecieveArgs
    Subjects?: boolean | TeacherCountOutputTypeCountSubjectsArgs
    ChatMessages?: boolean | TeacherCountOutputTypeCountChatMessagesArgs
    Announcements?: boolean | TeacherCountOutputTypeCountAnnouncementsArgs
    Academics?: boolean | TeacherCountOutputTypeCountAcademicsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountMeetReqRecieveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Meeting_RequestWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnoucementsWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountAcademicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicsWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    Academics: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Academics?: boolean | SubjectCountOutputTypeCountAcademicsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountAcademicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicsWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    Parent: number
    Subjects: number
    Attendance: number
    Annoucements: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | ClassCountOutputTypeCountParentArgs
    Subjects?: boolean | ClassCountOutputTypeCountSubjectsArgs
    Attendance?: boolean | ClassCountOutputTypeCountAttendanceArgs
    Annoucements?: boolean | ClassCountOutputTypeCountAnnoucementsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAnnoucementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnoucementsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    phoneNumber: string | null
    AuthFile: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    phoneNumber: string | null
    AuthFile: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    email: number
    phoneNumber: number
    AuthFile: number
    role: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    phoneNumber?: true
    AuthFile?: true
    role?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    phoneNumber?: true
    AuthFile?: true
    role?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    phoneNumber?: true
    AuthFile?: true
    role?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    email: string
    phoneNumber: string
    AuthFile: string
    role: $Enums.Role
    status: $Enums.Status
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    phoneNumber?: boolean
    AuthFile?: boolean
    role?: boolean
    status?: boolean
    Parent?: boolean | User$ParentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    phoneNumber?: boolean
    AuthFile?: boolean
    role?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "email" | "phoneNumber" | "AuthFile" | "role" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | User$ParentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Parent: Prisma.$ParentPayload<ExtArgs> | null
      Teacher: Prisma.$TeacherPayload<ExtArgs> | null
      Admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      email: string
      phoneNumber: string
      AuthFile: string
      role: $Enums.Role
      status: $Enums.Status
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Parent<T extends User$ParentArgs<ExtArgs> = {}>(args?: Subset<T, User$ParentArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends User$TeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$TeacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly AuthFile: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Parent
   */
  export type User$ParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
  }

  /**
   * User.Teacher
   */
  export type User$TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    UserId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    UserId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    UserId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    UserId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    UserId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    UserId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    UserId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    UserId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "UserId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      UserId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly UserId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    Pid: string | null
    StudentName: string | null
    ClassId: string | null
    ParentName: string | null
  }

  export type ParentMaxAggregateOutputType = {
    Pid: string | null
    StudentName: string | null
    ClassId: string | null
    ParentName: string | null
  }

  export type ParentCountAggregateOutputType = {
    Pid: number
    StudentName: number
    ClassId: number
    ParentName: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    Pid?: true
    StudentName?: true
    ClassId?: true
    ParentName?: true
  }

  export type ParentMaxAggregateInputType = {
    Pid?: true
    StudentName?: true
    ClassId?: true
    ParentName?: true
  }

  export type ParentCountAggregateInputType = {
    Pid?: true
    StudentName?: true
    ClassId?: true
    ParentName?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    Pid: string
    StudentName: string
    ClassId: string
    ParentName: string
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Pid?: boolean
    StudentName?: boolean
    ClassId?: boolean
    ParentName?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    MeetReqSend?: boolean | Parent$MeetReqSendArgs<ExtArgs>
    Attendance?: boolean | Parent$AttendanceArgs<ExtArgs>
    Academics?: boolean | Parent$AcademicsArgs<ExtArgs>
    ChatMessages?: boolean | Parent$ChatMessagesArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>



  export type ParentSelectScalar = {
    Pid?: boolean
    StudentName?: boolean
    ClassId?: boolean
    ParentName?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Pid" | "StudentName" | "ClassId" | "ParentName", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    MeetReqSend?: boolean | Parent$MeetReqSendArgs<ExtArgs>
    Attendance?: boolean | Parent$AttendanceArgs<ExtArgs>
    Academics?: boolean | Parent$AcademicsArgs<ExtArgs>
    ChatMessages?: boolean | Parent$ChatMessagesArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Class: Prisma.$ClassPayload<ExtArgs>
      MeetReqSend: Prisma.$Meeting_RequestPayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      Academics: Prisma.$AcademicsPayload<ExtArgs>[]
      ChatMessages: Prisma.$ChatMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Pid: string
      StudentName: string
      ClassId: string
      ParentName: string
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `Pid`
     * const parentWithPidOnly = await prisma.parent.findMany({ select: { Pid: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MeetReqSend<T extends Parent$MeetReqSendArgs<ExtArgs> = {}>(args?: Subset<T, Parent$MeetReqSendArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendance<T extends Parent$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Parent$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Academics<T extends Parent$AcademicsArgs<ExtArgs> = {}>(args?: Subset<T, Parent$AcademicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatMessages<T extends Parent$ChatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Parent$ChatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly Pid: FieldRef<"Parent", 'String'>
    readonly StudentName: FieldRef<"Parent", 'String'>
    readonly ClassId: FieldRef<"Parent", 'String'>
    readonly ParentName: FieldRef<"Parent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.MeetReqSend
   */
  export type Parent$MeetReqSendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    where?: Meeting_RequestWhereInput
    orderBy?: Meeting_RequestOrderByWithRelationInput | Meeting_RequestOrderByWithRelationInput[]
    cursor?: Meeting_RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meeting_RequestScalarFieldEnum | Meeting_RequestScalarFieldEnum[]
  }

  /**
   * Parent.Attendance
   */
  export type Parent$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Parent.Academics
   */
  export type Parent$AcademicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    where?: AcademicsWhereInput
    orderBy?: AcademicsOrderByWithRelationInput | AcademicsOrderByWithRelationInput[]
    cursor?: AcademicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademicsScalarFieldEnum | AcademicsScalarFieldEnum[]
  }

  /**
   * Parent.ChatMessages
   */
  export type Parent$ChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    Tid: string | null
    TeacherName: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    Tid: string | null
    TeacherName: string | null
  }

  export type TeacherCountAggregateOutputType = {
    Tid: number
    TeacherName: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    Tid?: true
    TeacherName?: true
  }

  export type TeacherMaxAggregateInputType = {
    Tid?: true
    TeacherName?: true
  }

  export type TeacherCountAggregateInputType = {
    Tid?: true
    TeacherName?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    Tid: string
    TeacherName: string
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Tid?: boolean
    TeacherName?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    MeetReqRecieve?: boolean | Teacher$MeetReqRecieveArgs<ExtArgs>
    Subjects?: boolean | Teacher$SubjectsArgs<ExtArgs>
    ChatMessages?: boolean | Teacher$ChatMessagesArgs<ExtArgs>
    Announcements?: boolean | Teacher$AnnouncementsArgs<ExtArgs>
    Academics?: boolean | Teacher$AcademicsArgs<ExtArgs>
    Class?: boolean | Teacher$ClassArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type TeacherSelectScalar = {
    Tid?: boolean
    TeacherName?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Tid" | "TeacherName", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    MeetReqRecieve?: boolean | Teacher$MeetReqRecieveArgs<ExtArgs>
    Subjects?: boolean | Teacher$SubjectsArgs<ExtArgs>
    ChatMessages?: boolean | Teacher$ChatMessagesArgs<ExtArgs>
    Announcements?: boolean | Teacher$AnnouncementsArgs<ExtArgs>
    Academics?: boolean | Teacher$AcademicsArgs<ExtArgs>
    Class?: boolean | Teacher$ClassArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      MeetReqRecieve: Prisma.$Meeting_RequestPayload<ExtArgs>[]
      Subjects: Prisma.$SubjectPayload<ExtArgs>[]
      ChatMessages: Prisma.$ChatMessagesPayload<ExtArgs>[]
      Announcements: Prisma.$AnnoucementsPayload<ExtArgs>[]
      Academics: Prisma.$AcademicsPayload<ExtArgs>[]
      Class: Prisma.$ClassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Tid: string
      TeacherName: string
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `Tid`
     * const teacherWithTidOnly = await prisma.teacher.findMany({ select: { Tid: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MeetReqRecieve<T extends Teacher$MeetReqRecieveArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$MeetReqRecieveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Subjects<T extends Teacher$SubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$SubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatMessages<T extends Teacher$ChatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$ChatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Announcements<T extends Teacher$AnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$AnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Academics<T extends Teacher$AcademicsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$AcademicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Class<T extends Teacher$ClassArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$ClassArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly Tid: FieldRef<"Teacher", 'String'>
    readonly TeacherName: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.MeetReqRecieve
   */
  export type Teacher$MeetReqRecieveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    where?: Meeting_RequestWhereInput
    orderBy?: Meeting_RequestOrderByWithRelationInput | Meeting_RequestOrderByWithRelationInput[]
    cursor?: Meeting_RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meeting_RequestScalarFieldEnum | Meeting_RequestScalarFieldEnum[]
  }

  /**
   * Teacher.Subjects
   */
  export type Teacher$SubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Teacher.ChatMessages
   */
  export type Teacher$ChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * Teacher.Announcements
   */
  export type Teacher$AnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    where?: AnnoucementsWhereInput
    orderBy?: AnnoucementsOrderByWithRelationInput | AnnoucementsOrderByWithRelationInput[]
    cursor?: AnnoucementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnoucementsScalarFieldEnum | AnnoucementsScalarFieldEnum[]
  }

  /**
   * Teacher.Academics
   */
  export type Teacher$AcademicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    where?: AcademicsWhereInput
    orderBy?: AcademicsOrderByWithRelationInput | AcademicsOrderByWithRelationInput[]
    cursor?: AcademicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademicsScalarFieldEnum | AcademicsScalarFieldEnum[]
  }

  /**
   * Teacher.Class
   */
  export type Teacher$ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    Sid: string | null
    Name: string | null
    ClassId: string | null
    TeacherId: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    Sid: string | null
    Name: string | null
    ClassId: string | null
    TeacherId: string | null
  }

  export type SubjectCountAggregateOutputType = {
    Sid: number
    Name: number
    ClassId: number
    TeacherId: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    Sid?: true
    Name?: true
    ClassId?: true
    TeacherId?: true
  }

  export type SubjectMaxAggregateInputType = {
    Sid?: true
    Name?: true
    ClassId?: true
    TeacherId?: true
  }

  export type SubjectCountAggregateInputType = {
    Sid?: true
    Name?: true
    ClassId?: true
    TeacherId?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    Sid: string
    Name: string
    ClassId: string
    TeacherId: string
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Sid?: boolean
    Name?: boolean
    ClassId?: boolean
    TeacherId?: boolean
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Academics?: boolean | Subject$AcademicsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>



  export type SubjectSelectScalar = {
    Sid?: boolean
    Name?: boolean
    ClassId?: boolean
    TeacherId?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Sid" | "Name" | "ClassId" | "TeacherId", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Academics?: boolean | Subject$AcademicsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      Class: Prisma.$ClassPayload<ExtArgs>
      Teacher: Prisma.$TeacherPayload<ExtArgs>
      Academics: Prisma.$AcademicsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Sid: string
      Name: string
      ClassId: string
      TeacherId: string
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `Sid`
     * const subjectWithSidOnly = await prisma.subject.findMany({ select: { Sid: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Academics<T extends Subject$AcademicsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$AcademicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly Sid: FieldRef<"Subject", 'String'>
    readonly Name: FieldRef<"Subject", 'String'>
    readonly ClassId: FieldRef<"Subject", 'String'>
    readonly TeacherId: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.Academics
   */
  export type Subject$AcademicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    where?: AcademicsWhereInput
    orderBy?: AcademicsOrderByWithRelationInput | AcademicsOrderByWithRelationInput[]
    cursor?: AcademicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademicsScalarFieldEnum | AcademicsScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    Name: string | null
    ClassTeacherId: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    Name: string | null
    ClassTeacherId: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    Name: number
    ClassTeacherId: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    Name?: true
    ClassTeacherId?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    Name?: true
    ClassTeacherId?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    Name?: true
    ClassTeacherId?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    Name: string
    ClassTeacherId: string
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    ClassTeacherId?: boolean
    Parent?: boolean | Class$ParentArgs<ExtArgs>
    Subjects?: boolean | Class$SubjectsArgs<ExtArgs>
    Attendance?: boolean | Class$AttendanceArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Annoucements?: boolean | Class$AnnoucementsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>



  export type ClassSelectScalar = {
    id?: boolean
    Name?: boolean
    ClassTeacherId?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "ClassTeacherId", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | Class$ParentArgs<ExtArgs>
    Subjects?: boolean | Class$SubjectsArgs<ExtArgs>
    Attendance?: boolean | Class$AttendanceArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Annoucements?: boolean | Class$AnnoucementsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      Parent: Prisma.$ParentPayload<ExtArgs>[]
      Subjects: Prisma.$SubjectPayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      Teacher: Prisma.$TeacherPayload<ExtArgs>
      Annoucements: Prisma.$AnnoucementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Name: string
      ClassTeacherId: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Parent<T extends Class$ParentArgs<ExtArgs> = {}>(args?: Subset<T, Class$ParentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Subjects<T extends Class$SubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Class$SubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendance<T extends Class$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Class$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Annoucements<T extends Class$AnnoucementsArgs<ExtArgs> = {}>(args?: Subset<T, Class$AnnoucementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly Name: FieldRef<"Class", 'String'>
    readonly ClassTeacherId: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.Parent
   */
  export type Class$ParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    cursor?: ParentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Class.Subjects
   */
  export type Class$SubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Class.Attendance
   */
  export type Class$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Class.Annoucements
   */
  export type Class$AnnoucementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    where?: AnnoucementsWhereInput
    orderBy?: AnnoucementsOrderByWithRelationInput | AnnoucementsOrderByWithRelationInput[]
    cursor?: AnnoucementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnoucementsScalarFieldEnum | AnnoucementsScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Annoucements
   */

  export type AggregateAnnoucements = {
    _count: AnnoucementsCountAggregateOutputType | null
    _min: AnnoucementsMinAggregateOutputType | null
    _max: AnnoucementsMaxAggregateOutputType | null
  }

  export type AnnoucementsMinAggregateOutputType = {
    id: string | null
    Text: string | null
    SenderId: string | null
    Title: string | null
    Date: Date | null
    ClassID: string | null
  }

  export type AnnoucementsMaxAggregateOutputType = {
    id: string | null
    Text: string | null
    SenderId: string | null
    Title: string | null
    Date: Date | null
    ClassID: string | null
  }

  export type AnnoucementsCountAggregateOutputType = {
    id: number
    Text: number
    SenderId: number
    Title: number
    Date: number
    ClassID: number
    _all: number
  }


  export type AnnoucementsMinAggregateInputType = {
    id?: true
    Text?: true
    SenderId?: true
    Title?: true
    Date?: true
    ClassID?: true
  }

  export type AnnoucementsMaxAggregateInputType = {
    id?: true
    Text?: true
    SenderId?: true
    Title?: true
    Date?: true
    ClassID?: true
  }

  export type AnnoucementsCountAggregateInputType = {
    id?: true
    Text?: true
    SenderId?: true
    Title?: true
    Date?: true
    ClassID?: true
    _all?: true
  }

  export type AnnoucementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annoucements to aggregate.
     */
    where?: AnnoucementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annoucements to fetch.
     */
    orderBy?: AnnoucementsOrderByWithRelationInput | AnnoucementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnoucementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annoucements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annoucements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annoucements
    **/
    _count?: true | AnnoucementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnoucementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnoucementsMaxAggregateInputType
  }

  export type GetAnnoucementsAggregateType<T extends AnnoucementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnoucements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnoucements[P]>
      : GetScalarType<T[P], AggregateAnnoucements[P]>
  }




  export type AnnoucementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnoucementsWhereInput
    orderBy?: AnnoucementsOrderByWithAggregationInput | AnnoucementsOrderByWithAggregationInput[]
    by: AnnoucementsScalarFieldEnum[] | AnnoucementsScalarFieldEnum
    having?: AnnoucementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnoucementsCountAggregateInputType | true
    _min?: AnnoucementsMinAggregateInputType
    _max?: AnnoucementsMaxAggregateInputType
  }

  export type AnnoucementsGroupByOutputType = {
    id: string
    Text: string
    SenderId: string | null
    Title: string
    Date: Date
    ClassID: string | null
    _count: AnnoucementsCountAggregateOutputType | null
    _min: AnnoucementsMinAggregateOutputType | null
    _max: AnnoucementsMaxAggregateOutputType | null
  }

  type GetAnnoucementsGroupByPayload<T extends AnnoucementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnoucementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnoucementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnoucementsGroupByOutputType[P]>
            : GetScalarType<T[P], AnnoucementsGroupByOutputType[P]>
        }
      >
    >


  export type AnnoucementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Text?: boolean
    SenderId?: boolean
    Title?: boolean
    Date?: boolean
    ClassID?: boolean
    Teacher?: boolean | Annoucements$TeacherArgs<ExtArgs>
    Class?: boolean | Annoucements$ClassArgs<ExtArgs>
  }, ExtArgs["result"]["annoucements"]>



  export type AnnoucementsSelectScalar = {
    id?: boolean
    Text?: boolean
    SenderId?: boolean
    Title?: boolean
    Date?: boolean
    ClassID?: boolean
  }

  export type AnnoucementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Text" | "SenderId" | "Title" | "Date" | "ClassID", ExtArgs["result"]["annoucements"]>
  export type AnnoucementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Teacher?: boolean | Annoucements$TeacherArgs<ExtArgs>
    Class?: boolean | Annoucements$ClassArgs<ExtArgs>
  }

  export type $AnnoucementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annoucements"
    objects: {
      Teacher: Prisma.$TeacherPayload<ExtArgs> | null
      Class: Prisma.$ClassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Text: string
      SenderId: string | null
      Title: string
      Date: Date
      ClassID: string | null
    }, ExtArgs["result"]["annoucements"]>
    composites: {}
  }

  type AnnoucementsGetPayload<S extends boolean | null | undefined | AnnoucementsDefaultArgs> = $Result.GetResult<Prisma.$AnnoucementsPayload, S>

  type AnnoucementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnoucementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnoucementsCountAggregateInputType | true
    }

  export interface AnnoucementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annoucements'], meta: { name: 'Annoucements' } }
    /**
     * Find zero or one Annoucements that matches the filter.
     * @param {AnnoucementsFindUniqueArgs} args - Arguments to find a Annoucements
     * @example
     * // Get one Annoucements
     * const annoucements = await prisma.annoucements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnoucementsFindUniqueArgs>(args: SelectSubset<T, AnnoucementsFindUniqueArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Annoucements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnoucementsFindUniqueOrThrowArgs} args - Arguments to find a Annoucements
     * @example
     * // Get one Annoucements
     * const annoucements = await prisma.annoucements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnoucementsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnoucementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annoucements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoucementsFindFirstArgs} args - Arguments to find a Annoucements
     * @example
     * // Get one Annoucements
     * const annoucements = await prisma.annoucements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnoucementsFindFirstArgs>(args?: SelectSubset<T, AnnoucementsFindFirstArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annoucements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoucementsFindFirstOrThrowArgs} args - Arguments to find a Annoucements
     * @example
     * // Get one Annoucements
     * const annoucements = await prisma.annoucements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnoucementsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnoucementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Annoucements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoucementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annoucements
     * const annoucements = await prisma.annoucements.findMany()
     * 
     * // Get first 10 Annoucements
     * const annoucements = await prisma.annoucements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annoucementsWithIdOnly = await prisma.annoucements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnoucementsFindManyArgs>(args?: SelectSubset<T, AnnoucementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Annoucements.
     * @param {AnnoucementsCreateArgs} args - Arguments to create a Annoucements.
     * @example
     * // Create one Annoucements
     * const Annoucements = await prisma.annoucements.create({
     *   data: {
     *     // ... data to create a Annoucements
     *   }
     * })
     * 
     */
    create<T extends AnnoucementsCreateArgs>(args: SelectSubset<T, AnnoucementsCreateArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Annoucements.
     * @param {AnnoucementsCreateManyArgs} args - Arguments to create many Annoucements.
     * @example
     * // Create many Annoucements
     * const annoucements = await prisma.annoucements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnoucementsCreateManyArgs>(args?: SelectSubset<T, AnnoucementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Annoucements.
     * @param {AnnoucementsDeleteArgs} args - Arguments to delete one Annoucements.
     * @example
     * // Delete one Annoucements
     * const Annoucements = await prisma.annoucements.delete({
     *   where: {
     *     // ... filter to delete one Annoucements
     *   }
     * })
     * 
     */
    delete<T extends AnnoucementsDeleteArgs>(args: SelectSubset<T, AnnoucementsDeleteArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Annoucements.
     * @param {AnnoucementsUpdateArgs} args - Arguments to update one Annoucements.
     * @example
     * // Update one Annoucements
     * const annoucements = await prisma.annoucements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnoucementsUpdateArgs>(args: SelectSubset<T, AnnoucementsUpdateArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Annoucements.
     * @param {AnnoucementsDeleteManyArgs} args - Arguments to filter Annoucements to delete.
     * @example
     * // Delete a few Annoucements
     * const { count } = await prisma.annoucements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnoucementsDeleteManyArgs>(args?: SelectSubset<T, AnnoucementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annoucements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoucementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annoucements
     * const annoucements = await prisma.annoucements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnoucementsUpdateManyArgs>(args: SelectSubset<T, AnnoucementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Annoucements.
     * @param {AnnoucementsUpsertArgs} args - Arguments to update or create a Annoucements.
     * @example
     * // Update or create a Annoucements
     * const annoucements = await prisma.annoucements.upsert({
     *   create: {
     *     // ... data to create a Annoucements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annoucements we want to update
     *   }
     * })
     */
    upsert<T extends AnnoucementsUpsertArgs>(args: SelectSubset<T, AnnoucementsUpsertArgs<ExtArgs>>): Prisma__AnnoucementsClient<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Annoucements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoucementsCountArgs} args - Arguments to filter Annoucements to count.
     * @example
     * // Count the number of Annoucements
     * const count = await prisma.annoucements.count({
     *   where: {
     *     // ... the filter for the Annoucements we want to count
     *   }
     * })
    **/
    count<T extends AnnoucementsCountArgs>(
      args?: Subset<T, AnnoucementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnoucementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annoucements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoucementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnoucementsAggregateArgs>(args: Subset<T, AnnoucementsAggregateArgs>): Prisma.PrismaPromise<GetAnnoucementsAggregateType<T>>

    /**
     * Group by Annoucements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoucementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnoucementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnoucementsGroupByArgs['orderBy'] }
        : { orderBy?: AnnoucementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnoucementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnoucementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annoucements model
   */
  readonly fields: AnnoucementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annoucements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnoucementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Teacher<T extends Annoucements$TeacherArgs<ExtArgs> = {}>(args?: Subset<T, Annoucements$TeacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Class<T extends Annoucements$ClassArgs<ExtArgs> = {}>(args?: Subset<T, Annoucements$ClassArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Annoucements model
   */
  interface AnnoucementsFieldRefs {
    readonly id: FieldRef<"Annoucements", 'String'>
    readonly Text: FieldRef<"Annoucements", 'String'>
    readonly SenderId: FieldRef<"Annoucements", 'String'>
    readonly Title: FieldRef<"Annoucements", 'String'>
    readonly Date: FieldRef<"Annoucements", 'DateTime'>
    readonly ClassID: FieldRef<"Annoucements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Annoucements findUnique
   */
  export type AnnoucementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * Filter, which Annoucements to fetch.
     */
    where: AnnoucementsWhereUniqueInput
  }

  /**
   * Annoucements findUniqueOrThrow
   */
  export type AnnoucementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * Filter, which Annoucements to fetch.
     */
    where: AnnoucementsWhereUniqueInput
  }

  /**
   * Annoucements findFirst
   */
  export type AnnoucementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * Filter, which Annoucements to fetch.
     */
    where?: AnnoucementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annoucements to fetch.
     */
    orderBy?: AnnoucementsOrderByWithRelationInput | AnnoucementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annoucements.
     */
    cursor?: AnnoucementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annoucements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annoucements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annoucements.
     */
    distinct?: AnnoucementsScalarFieldEnum | AnnoucementsScalarFieldEnum[]
  }

  /**
   * Annoucements findFirstOrThrow
   */
  export type AnnoucementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * Filter, which Annoucements to fetch.
     */
    where?: AnnoucementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annoucements to fetch.
     */
    orderBy?: AnnoucementsOrderByWithRelationInput | AnnoucementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annoucements.
     */
    cursor?: AnnoucementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annoucements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annoucements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annoucements.
     */
    distinct?: AnnoucementsScalarFieldEnum | AnnoucementsScalarFieldEnum[]
  }

  /**
   * Annoucements findMany
   */
  export type AnnoucementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * Filter, which Annoucements to fetch.
     */
    where?: AnnoucementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annoucements to fetch.
     */
    orderBy?: AnnoucementsOrderByWithRelationInput | AnnoucementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annoucements.
     */
    cursor?: AnnoucementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annoucements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annoucements.
     */
    skip?: number
    distinct?: AnnoucementsScalarFieldEnum | AnnoucementsScalarFieldEnum[]
  }

  /**
   * Annoucements create
   */
  export type AnnoucementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Annoucements.
     */
    data: XOR<AnnoucementsCreateInput, AnnoucementsUncheckedCreateInput>
  }

  /**
   * Annoucements createMany
   */
  export type AnnoucementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annoucements.
     */
    data: AnnoucementsCreateManyInput | AnnoucementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annoucements update
   */
  export type AnnoucementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Annoucements.
     */
    data: XOR<AnnoucementsUpdateInput, AnnoucementsUncheckedUpdateInput>
    /**
     * Choose, which Annoucements to update.
     */
    where: AnnoucementsWhereUniqueInput
  }

  /**
   * Annoucements updateMany
   */
  export type AnnoucementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annoucements.
     */
    data: XOR<AnnoucementsUpdateManyMutationInput, AnnoucementsUncheckedUpdateManyInput>
    /**
     * Filter which Annoucements to update
     */
    where?: AnnoucementsWhereInput
    /**
     * Limit how many Annoucements to update.
     */
    limit?: number
  }

  /**
   * Annoucements upsert
   */
  export type AnnoucementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Annoucements to update in case it exists.
     */
    where: AnnoucementsWhereUniqueInput
    /**
     * In case the Annoucements found by the `where` argument doesn't exist, create a new Annoucements with this data.
     */
    create: XOR<AnnoucementsCreateInput, AnnoucementsUncheckedCreateInput>
    /**
     * In case the Annoucements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnoucementsUpdateInput, AnnoucementsUncheckedUpdateInput>
  }

  /**
   * Annoucements delete
   */
  export type AnnoucementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
    /**
     * Filter which Annoucements to delete.
     */
    where: AnnoucementsWhereUniqueInput
  }

  /**
   * Annoucements deleteMany
   */
  export type AnnoucementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annoucements to delete
     */
    where?: AnnoucementsWhereInput
    /**
     * Limit how many Annoucements to delete.
     */
    limit?: number
  }

  /**
   * Annoucements.Teacher
   */
  export type Annoucements$TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Annoucements.Class
   */
  export type Annoucements$ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * Annoucements without action
   */
  export type AnnoucementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annoucements
     */
    select?: AnnoucementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annoucements
     */
    omit?: AnnoucementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoucementsInclude<ExtArgs> | null
  }


  /**
   * Model Meeting_Request
   */

  export type AggregateMeeting_Request = {
    _count: Meeting_RequestCountAggregateOutputType | null
    _min: Meeting_RequestMinAggregateOutputType | null
    _max: Meeting_RequestMaxAggregateOutputType | null
  }

  export type Meeting_RequestMinAggregateOutputType = {
    id: string | null
    ParentId: string | null
    date: Date | null
    content: string | null
    TeacherId: string | null
    MeetStatus: $Enums.StatusMeet | null
    Rejection_Reason: string | null
  }

  export type Meeting_RequestMaxAggregateOutputType = {
    id: string | null
    ParentId: string | null
    date: Date | null
    content: string | null
    TeacherId: string | null
    MeetStatus: $Enums.StatusMeet | null
    Rejection_Reason: string | null
  }

  export type Meeting_RequestCountAggregateOutputType = {
    id: number
    ParentId: number
    date: number
    content: number
    TeacherId: number
    MeetStatus: number
    Rejection_Reason: number
    _all: number
  }


  export type Meeting_RequestMinAggregateInputType = {
    id?: true
    ParentId?: true
    date?: true
    content?: true
    TeacherId?: true
    MeetStatus?: true
    Rejection_Reason?: true
  }

  export type Meeting_RequestMaxAggregateInputType = {
    id?: true
    ParentId?: true
    date?: true
    content?: true
    TeacherId?: true
    MeetStatus?: true
    Rejection_Reason?: true
  }

  export type Meeting_RequestCountAggregateInputType = {
    id?: true
    ParentId?: true
    date?: true
    content?: true
    TeacherId?: true
    MeetStatus?: true
    Rejection_Reason?: true
    _all?: true
  }

  export type Meeting_RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting_Request to aggregate.
     */
    where?: Meeting_RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meeting_Requests to fetch.
     */
    orderBy?: Meeting_RequestOrderByWithRelationInput | Meeting_RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Meeting_RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meeting_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meeting_Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meeting_Requests
    **/
    _count?: true | Meeting_RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meeting_RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meeting_RequestMaxAggregateInputType
  }

  export type GetMeeting_RequestAggregateType<T extends Meeting_RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting_Request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting_Request[P]>
      : GetScalarType<T[P], AggregateMeeting_Request[P]>
  }




  export type Meeting_RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Meeting_RequestWhereInput
    orderBy?: Meeting_RequestOrderByWithAggregationInput | Meeting_RequestOrderByWithAggregationInput[]
    by: Meeting_RequestScalarFieldEnum[] | Meeting_RequestScalarFieldEnum
    having?: Meeting_RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meeting_RequestCountAggregateInputType | true
    _min?: Meeting_RequestMinAggregateInputType
    _max?: Meeting_RequestMaxAggregateInputType
  }

  export type Meeting_RequestGroupByOutputType = {
    id: string
    ParentId: string
    date: Date
    content: string
    TeacherId: string
    MeetStatus: $Enums.StatusMeet
    Rejection_Reason: string | null
    _count: Meeting_RequestCountAggregateOutputType | null
    _min: Meeting_RequestMinAggregateOutputType | null
    _max: Meeting_RequestMaxAggregateOutputType | null
  }

  type GetMeeting_RequestGroupByPayload<T extends Meeting_RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meeting_RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meeting_RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meeting_RequestGroupByOutputType[P]>
            : GetScalarType<T[P], Meeting_RequestGroupByOutputType[P]>
        }
      >
    >


  export type Meeting_RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ParentId?: boolean
    date?: boolean
    content?: boolean
    TeacherId?: boolean
    MeetStatus?: boolean
    Rejection_Reason?: boolean
    Sender?: boolean | ParentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_Request"]>



  export type Meeting_RequestSelectScalar = {
    id?: boolean
    ParentId?: boolean
    date?: boolean
    content?: boolean
    TeacherId?: boolean
    MeetStatus?: boolean
    Rejection_Reason?: boolean
  }

  export type Meeting_RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ParentId" | "date" | "content" | "TeacherId" | "MeetStatus" | "Rejection_Reason", ExtArgs["result"]["meeting_Request"]>
  export type Meeting_RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sender?: boolean | ParentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $Meeting_RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting_Request"
    objects: {
      Sender: Prisma.$ParentPayload<ExtArgs>
      Teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ParentId: string
      date: Date
      content: string
      TeacherId: string
      MeetStatus: $Enums.StatusMeet
      Rejection_Reason: string | null
    }, ExtArgs["result"]["meeting_Request"]>
    composites: {}
  }

  type Meeting_RequestGetPayload<S extends boolean | null | undefined | Meeting_RequestDefaultArgs> = $Result.GetResult<Prisma.$Meeting_RequestPayload, S>

  type Meeting_RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Meeting_RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meeting_RequestCountAggregateInputType | true
    }

  export interface Meeting_RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting_Request'], meta: { name: 'Meeting_Request' } }
    /**
     * Find zero or one Meeting_Request that matches the filter.
     * @param {Meeting_RequestFindUniqueArgs} args - Arguments to find a Meeting_Request
     * @example
     * // Get one Meeting_Request
     * const meeting_Request = await prisma.meeting_Request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Meeting_RequestFindUniqueArgs>(args: SelectSubset<T, Meeting_RequestFindUniqueArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting_Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Meeting_RequestFindUniqueOrThrowArgs} args - Arguments to find a Meeting_Request
     * @example
     * // Get one Meeting_Request
     * const meeting_Request = await prisma.meeting_Request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Meeting_RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, Meeting_RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_RequestFindFirstArgs} args - Arguments to find a Meeting_Request
     * @example
     * // Get one Meeting_Request
     * const meeting_Request = await prisma.meeting_Request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Meeting_RequestFindFirstArgs>(args?: SelectSubset<T, Meeting_RequestFindFirstArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_RequestFindFirstOrThrowArgs} args - Arguments to find a Meeting_Request
     * @example
     * // Get one Meeting_Request
     * const meeting_Request = await prisma.meeting_Request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Meeting_RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, Meeting_RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meeting_Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meeting_Requests
     * const meeting_Requests = await prisma.meeting_Request.findMany()
     * 
     * // Get first 10 Meeting_Requests
     * const meeting_Requests = await prisma.meeting_Request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meeting_RequestWithIdOnly = await prisma.meeting_Request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Meeting_RequestFindManyArgs>(args?: SelectSubset<T, Meeting_RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting_Request.
     * @param {Meeting_RequestCreateArgs} args - Arguments to create a Meeting_Request.
     * @example
     * // Create one Meeting_Request
     * const Meeting_Request = await prisma.meeting_Request.create({
     *   data: {
     *     // ... data to create a Meeting_Request
     *   }
     * })
     * 
     */
    create<T extends Meeting_RequestCreateArgs>(args: SelectSubset<T, Meeting_RequestCreateArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meeting_Requests.
     * @param {Meeting_RequestCreateManyArgs} args - Arguments to create many Meeting_Requests.
     * @example
     * // Create many Meeting_Requests
     * const meeting_Request = await prisma.meeting_Request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Meeting_RequestCreateManyArgs>(args?: SelectSubset<T, Meeting_RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meeting_Request.
     * @param {Meeting_RequestDeleteArgs} args - Arguments to delete one Meeting_Request.
     * @example
     * // Delete one Meeting_Request
     * const Meeting_Request = await prisma.meeting_Request.delete({
     *   where: {
     *     // ... filter to delete one Meeting_Request
     *   }
     * })
     * 
     */
    delete<T extends Meeting_RequestDeleteArgs>(args: SelectSubset<T, Meeting_RequestDeleteArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting_Request.
     * @param {Meeting_RequestUpdateArgs} args - Arguments to update one Meeting_Request.
     * @example
     * // Update one Meeting_Request
     * const meeting_Request = await prisma.meeting_Request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Meeting_RequestUpdateArgs>(args: SelectSubset<T, Meeting_RequestUpdateArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meeting_Requests.
     * @param {Meeting_RequestDeleteManyArgs} args - Arguments to filter Meeting_Requests to delete.
     * @example
     * // Delete a few Meeting_Requests
     * const { count } = await prisma.meeting_Request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Meeting_RequestDeleteManyArgs>(args?: SelectSubset<T, Meeting_RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meeting_Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meeting_Requests
     * const meeting_Request = await prisma.meeting_Request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Meeting_RequestUpdateManyArgs>(args: SelectSubset<T, Meeting_RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting_Request.
     * @param {Meeting_RequestUpsertArgs} args - Arguments to update or create a Meeting_Request.
     * @example
     * // Update or create a Meeting_Request
     * const meeting_Request = await prisma.meeting_Request.upsert({
     *   create: {
     *     // ... data to create a Meeting_Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting_Request we want to update
     *   }
     * })
     */
    upsert<T extends Meeting_RequestUpsertArgs>(args: SelectSubset<T, Meeting_RequestUpsertArgs<ExtArgs>>): Prisma__Meeting_RequestClient<$Result.GetResult<Prisma.$Meeting_RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meeting_Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_RequestCountArgs} args - Arguments to filter Meeting_Requests to count.
     * @example
     * // Count the number of Meeting_Requests
     * const count = await prisma.meeting_Request.count({
     *   where: {
     *     // ... the filter for the Meeting_Requests we want to count
     *   }
     * })
    **/
    count<T extends Meeting_RequestCountArgs>(
      args?: Subset<T, Meeting_RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meeting_RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting_Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meeting_RequestAggregateArgs>(args: Subset<T, Meeting_RequestAggregateArgs>): Prisma.PrismaPromise<GetMeeting_RequestAggregateType<T>>

    /**
     * Group by Meeting_Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Meeting_RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Meeting_RequestGroupByArgs['orderBy'] }
        : { orderBy?: Meeting_RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Meeting_RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeeting_RequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting_Request model
   */
  readonly fields: Meeting_RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting_Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Meeting_RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Sender<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting_Request model
   */
  interface Meeting_RequestFieldRefs {
    readonly id: FieldRef<"Meeting_Request", 'String'>
    readonly ParentId: FieldRef<"Meeting_Request", 'String'>
    readonly date: FieldRef<"Meeting_Request", 'DateTime'>
    readonly content: FieldRef<"Meeting_Request", 'String'>
    readonly TeacherId: FieldRef<"Meeting_Request", 'String'>
    readonly MeetStatus: FieldRef<"Meeting_Request", 'StatusMeet'>
    readonly Rejection_Reason: FieldRef<"Meeting_Request", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meeting_Request findUnique
   */
  export type Meeting_RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * Filter, which Meeting_Request to fetch.
     */
    where: Meeting_RequestWhereUniqueInput
  }

  /**
   * Meeting_Request findUniqueOrThrow
   */
  export type Meeting_RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * Filter, which Meeting_Request to fetch.
     */
    where: Meeting_RequestWhereUniqueInput
  }

  /**
   * Meeting_Request findFirst
   */
  export type Meeting_RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * Filter, which Meeting_Request to fetch.
     */
    where?: Meeting_RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meeting_Requests to fetch.
     */
    orderBy?: Meeting_RequestOrderByWithRelationInput | Meeting_RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meeting_Requests.
     */
    cursor?: Meeting_RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meeting_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meeting_Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meeting_Requests.
     */
    distinct?: Meeting_RequestScalarFieldEnum | Meeting_RequestScalarFieldEnum[]
  }

  /**
   * Meeting_Request findFirstOrThrow
   */
  export type Meeting_RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * Filter, which Meeting_Request to fetch.
     */
    where?: Meeting_RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meeting_Requests to fetch.
     */
    orderBy?: Meeting_RequestOrderByWithRelationInput | Meeting_RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meeting_Requests.
     */
    cursor?: Meeting_RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meeting_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meeting_Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meeting_Requests.
     */
    distinct?: Meeting_RequestScalarFieldEnum | Meeting_RequestScalarFieldEnum[]
  }

  /**
   * Meeting_Request findMany
   */
  export type Meeting_RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * Filter, which Meeting_Requests to fetch.
     */
    where?: Meeting_RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meeting_Requests to fetch.
     */
    orderBy?: Meeting_RequestOrderByWithRelationInput | Meeting_RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meeting_Requests.
     */
    cursor?: Meeting_RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meeting_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meeting_Requests.
     */
    skip?: number
    distinct?: Meeting_RequestScalarFieldEnum | Meeting_RequestScalarFieldEnum[]
  }

  /**
   * Meeting_Request create
   */
  export type Meeting_RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting_Request.
     */
    data: XOR<Meeting_RequestCreateInput, Meeting_RequestUncheckedCreateInput>
  }

  /**
   * Meeting_Request createMany
   */
  export type Meeting_RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meeting_Requests.
     */
    data: Meeting_RequestCreateManyInput | Meeting_RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting_Request update
   */
  export type Meeting_RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting_Request.
     */
    data: XOR<Meeting_RequestUpdateInput, Meeting_RequestUncheckedUpdateInput>
    /**
     * Choose, which Meeting_Request to update.
     */
    where: Meeting_RequestWhereUniqueInput
  }

  /**
   * Meeting_Request updateMany
   */
  export type Meeting_RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meeting_Requests.
     */
    data: XOR<Meeting_RequestUpdateManyMutationInput, Meeting_RequestUncheckedUpdateManyInput>
    /**
     * Filter which Meeting_Requests to update
     */
    where?: Meeting_RequestWhereInput
    /**
     * Limit how many Meeting_Requests to update.
     */
    limit?: number
  }

  /**
   * Meeting_Request upsert
   */
  export type Meeting_RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting_Request to update in case it exists.
     */
    where: Meeting_RequestWhereUniqueInput
    /**
     * In case the Meeting_Request found by the `where` argument doesn't exist, create a new Meeting_Request with this data.
     */
    create: XOR<Meeting_RequestCreateInput, Meeting_RequestUncheckedCreateInput>
    /**
     * In case the Meeting_Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Meeting_RequestUpdateInput, Meeting_RequestUncheckedUpdateInput>
  }

  /**
   * Meeting_Request delete
   */
  export type Meeting_RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
    /**
     * Filter which Meeting_Request to delete.
     */
    where: Meeting_RequestWhereUniqueInput
  }

  /**
   * Meeting_Request deleteMany
   */
  export type Meeting_RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting_Requests to delete
     */
    where?: Meeting_RequestWhereInput
    /**
     * Limit how many Meeting_Requests to delete.
     */
    limit?: number
  }

  /**
   * Meeting_Request without action
   */
  export type Meeting_RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_Request
     */
    select?: Meeting_RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting_Request
     */
    omit?: Meeting_RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Meeting_RequestInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    date: Date | null
    isPresent: boolean | null
    Issue_For: string | null
    ParentId: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    isPresent: boolean | null
    Issue_For: string | null
    ParentId: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    date: number
    isPresent: number
    Issue_For: number
    ParentId: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    date?: true
    isPresent?: true
    Issue_For?: true
    ParentId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    date?: true
    isPresent?: true
    Issue_For?: true
    ParentId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    date?: true
    isPresent?: true
    Issue_For?: true
    ParentId?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    date: Date
    isPresent: boolean
    Issue_For: string
    ParentId: string
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    isPresent?: boolean
    Issue_For?: boolean
    ParentId?: boolean
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    id?: boolean
    date?: boolean
    isPresent?: boolean
    Issue_For?: boolean
    ParentId?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "isPresent" | "Issue_For" | "ParentId", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      Class: Prisma.$ClassPayload<ExtArgs>
      Parent: Prisma.$ParentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      isPresent: boolean
      Issue_For: string
      ParentId: string
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly isPresent: FieldRef<"Attendance", 'Boolean'>
    readonly Issue_For: FieldRef<"Attendance", 'String'>
    readonly ParentId: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Academics
   */

  export type AggregateAcademics = {
    _count: AcademicsCountAggregateOutputType | null
    _min: AcademicsMinAggregateOutputType | null
    _max: AcademicsMaxAggregateOutputType | null
  }

  export type AcademicsMinAggregateOutputType = {
    ExamName: string | null
    id: string | null
    Pid: string | null
    SubjectID: string | null
    Grade: string | null
    ReportLink: string | null
    Date: Date | null
    TeacherID: string | null
  }

  export type AcademicsMaxAggregateOutputType = {
    ExamName: string | null
    id: string | null
    Pid: string | null
    SubjectID: string | null
    Grade: string | null
    ReportLink: string | null
    Date: Date | null
    TeacherID: string | null
  }

  export type AcademicsCountAggregateOutputType = {
    ExamName: number
    id: number
    Pid: number
    SubjectID: number
    Grade: number
    ReportLink: number
    Date: number
    TeacherID: number
    _all: number
  }


  export type AcademicsMinAggregateInputType = {
    ExamName?: true
    id?: true
    Pid?: true
    SubjectID?: true
    Grade?: true
    ReportLink?: true
    Date?: true
    TeacherID?: true
  }

  export type AcademicsMaxAggregateInputType = {
    ExamName?: true
    id?: true
    Pid?: true
    SubjectID?: true
    Grade?: true
    ReportLink?: true
    Date?: true
    TeacherID?: true
  }

  export type AcademicsCountAggregateInputType = {
    ExamName?: true
    id?: true
    Pid?: true
    SubjectID?: true
    Grade?: true
    ReportLink?: true
    Date?: true
    TeacherID?: true
    _all?: true
  }

  export type AcademicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Academics to aggregate.
     */
    where?: AcademicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academics to fetch.
     */
    orderBy?: AcademicsOrderByWithRelationInput | AcademicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Academics
    **/
    _count?: true | AcademicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicsMaxAggregateInputType
  }

  export type GetAcademicsAggregateType<T extends AcademicsAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademics[P]>
      : GetScalarType<T[P], AggregateAcademics[P]>
  }




  export type AcademicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicsWhereInput
    orderBy?: AcademicsOrderByWithAggregationInput | AcademicsOrderByWithAggregationInput[]
    by: AcademicsScalarFieldEnum[] | AcademicsScalarFieldEnum
    having?: AcademicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicsCountAggregateInputType | true
    _min?: AcademicsMinAggregateInputType
    _max?: AcademicsMaxAggregateInputType
  }

  export type AcademicsGroupByOutputType = {
    ExamName: string
    id: string
    Pid: string
    SubjectID: string
    Grade: string
    ReportLink: string | null
    Date: Date
    TeacherID: string
    _count: AcademicsCountAggregateOutputType | null
    _min: AcademicsMinAggregateOutputType | null
    _max: AcademicsMaxAggregateOutputType | null
  }

  type GetAcademicsGroupByPayload<T extends AcademicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicsGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicsGroupByOutputType[P]>
        }
      >
    >


  export type AcademicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ExamName?: boolean
    id?: boolean
    Pid?: boolean
    SubjectID?: boolean
    Grade?: boolean
    ReportLink?: boolean
    Date?: boolean
    TeacherID?: boolean
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academics"]>



  export type AcademicsSelectScalar = {
    ExamName?: boolean
    id?: boolean
    Pid?: boolean
    SubjectID?: boolean
    Grade?: boolean
    ReportLink?: boolean
    Date?: boolean
    TeacherID?: boolean
  }

  export type AcademicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ExamName" | "id" | "Pid" | "SubjectID" | "Grade" | "ReportLink" | "Date" | "TeacherID", ExtArgs["result"]["academics"]>
  export type AcademicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $AcademicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Academics"
    objects: {
      Teacher: Prisma.$TeacherPayload<ExtArgs>
      Parent: Prisma.$ParentPayload<ExtArgs>
      Subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ExamName: string
      id: string
      Pid: string
      SubjectID: string
      Grade: string
      ReportLink: string | null
      Date: Date
      TeacherID: string
    }, ExtArgs["result"]["academics"]>
    composites: {}
  }

  type AcademicsGetPayload<S extends boolean | null | undefined | AcademicsDefaultArgs> = $Result.GetResult<Prisma.$AcademicsPayload, S>

  type AcademicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicsCountAggregateInputType | true
    }

  export interface AcademicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Academics'], meta: { name: 'Academics' } }
    /**
     * Find zero or one Academics that matches the filter.
     * @param {AcademicsFindUniqueArgs} args - Arguments to find a Academics
     * @example
     * // Get one Academics
     * const academics = await prisma.academics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicsFindUniqueArgs>(args: SelectSubset<T, AcademicsFindUniqueArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Academics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicsFindUniqueOrThrowArgs} args - Arguments to find a Academics
     * @example
     * // Get one Academics
     * const academics = await prisma.academics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicsFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicsFindFirstArgs} args - Arguments to find a Academics
     * @example
     * // Get one Academics
     * const academics = await prisma.academics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicsFindFirstArgs>(args?: SelectSubset<T, AcademicsFindFirstArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicsFindFirstOrThrowArgs} args - Arguments to find a Academics
     * @example
     * // Get one Academics
     * const academics = await prisma.academics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicsFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Academics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Academics
     * const academics = await prisma.academics.findMany()
     * 
     * // Get first 10 Academics
     * const academics = await prisma.academics.findMany({ take: 10 })
     * 
     * // Only select the `ExamName`
     * const academicsWithExamNameOnly = await prisma.academics.findMany({ select: { ExamName: true } })
     * 
     */
    findMany<T extends AcademicsFindManyArgs>(args?: SelectSubset<T, AcademicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Academics.
     * @param {AcademicsCreateArgs} args - Arguments to create a Academics.
     * @example
     * // Create one Academics
     * const Academics = await prisma.academics.create({
     *   data: {
     *     // ... data to create a Academics
     *   }
     * })
     * 
     */
    create<T extends AcademicsCreateArgs>(args: SelectSubset<T, AcademicsCreateArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Academics.
     * @param {AcademicsCreateManyArgs} args - Arguments to create many Academics.
     * @example
     * // Create many Academics
     * const academics = await prisma.academics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicsCreateManyArgs>(args?: SelectSubset<T, AcademicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Academics.
     * @param {AcademicsDeleteArgs} args - Arguments to delete one Academics.
     * @example
     * // Delete one Academics
     * const Academics = await prisma.academics.delete({
     *   where: {
     *     // ... filter to delete one Academics
     *   }
     * })
     * 
     */
    delete<T extends AcademicsDeleteArgs>(args: SelectSubset<T, AcademicsDeleteArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Academics.
     * @param {AcademicsUpdateArgs} args - Arguments to update one Academics.
     * @example
     * // Update one Academics
     * const academics = await prisma.academics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicsUpdateArgs>(args: SelectSubset<T, AcademicsUpdateArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Academics.
     * @param {AcademicsDeleteManyArgs} args - Arguments to filter Academics to delete.
     * @example
     * // Delete a few Academics
     * const { count } = await prisma.academics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicsDeleteManyArgs>(args?: SelectSubset<T, AcademicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Academics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Academics
     * const academics = await prisma.academics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicsUpdateManyArgs>(args: SelectSubset<T, AcademicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Academics.
     * @param {AcademicsUpsertArgs} args - Arguments to update or create a Academics.
     * @example
     * // Update or create a Academics
     * const academics = await prisma.academics.upsert({
     *   create: {
     *     // ... data to create a Academics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Academics we want to update
     *   }
     * })
     */
    upsert<T extends AcademicsUpsertArgs>(args: SelectSubset<T, AcademicsUpsertArgs<ExtArgs>>): Prisma__AcademicsClient<$Result.GetResult<Prisma.$AcademicsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Academics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicsCountArgs} args - Arguments to filter Academics to count.
     * @example
     * // Count the number of Academics
     * const count = await prisma.academics.count({
     *   where: {
     *     // ... the filter for the Academics we want to count
     *   }
     * })
    **/
    count<T extends AcademicsCountArgs>(
      args?: Subset<T, AcademicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Academics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcademicsAggregateArgs>(args: Subset<T, AcademicsAggregateArgs>): Prisma.PrismaPromise<GetAcademicsAggregateType<T>>

    /**
     * Group by Academics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcademicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicsGroupByArgs['orderBy'] }
        : { orderBy?: AcademicsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcademicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Academics model
   */
  readonly fields: AcademicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Academics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Academics model
   */
  interface AcademicsFieldRefs {
    readonly ExamName: FieldRef<"Academics", 'String'>
    readonly id: FieldRef<"Academics", 'String'>
    readonly Pid: FieldRef<"Academics", 'String'>
    readonly SubjectID: FieldRef<"Academics", 'String'>
    readonly Grade: FieldRef<"Academics", 'String'>
    readonly ReportLink: FieldRef<"Academics", 'String'>
    readonly Date: FieldRef<"Academics", 'DateTime'>
    readonly TeacherID: FieldRef<"Academics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Academics findUnique
   */
  export type AcademicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * Filter, which Academics to fetch.
     */
    where: AcademicsWhereUniqueInput
  }

  /**
   * Academics findUniqueOrThrow
   */
  export type AcademicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * Filter, which Academics to fetch.
     */
    where: AcademicsWhereUniqueInput
  }

  /**
   * Academics findFirst
   */
  export type AcademicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * Filter, which Academics to fetch.
     */
    where?: AcademicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academics to fetch.
     */
    orderBy?: AcademicsOrderByWithRelationInput | AcademicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Academics.
     */
    cursor?: AcademicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Academics.
     */
    distinct?: AcademicsScalarFieldEnum | AcademicsScalarFieldEnum[]
  }

  /**
   * Academics findFirstOrThrow
   */
  export type AcademicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * Filter, which Academics to fetch.
     */
    where?: AcademicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academics to fetch.
     */
    orderBy?: AcademicsOrderByWithRelationInput | AcademicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Academics.
     */
    cursor?: AcademicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Academics.
     */
    distinct?: AcademicsScalarFieldEnum | AcademicsScalarFieldEnum[]
  }

  /**
   * Academics findMany
   */
  export type AcademicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * Filter, which Academics to fetch.
     */
    where?: AcademicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academics to fetch.
     */
    orderBy?: AcademicsOrderByWithRelationInput | AcademicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Academics.
     */
    cursor?: AcademicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academics.
     */
    skip?: number
    distinct?: AcademicsScalarFieldEnum | AcademicsScalarFieldEnum[]
  }

  /**
   * Academics create
   */
  export type AcademicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * The data needed to create a Academics.
     */
    data: XOR<AcademicsCreateInput, AcademicsUncheckedCreateInput>
  }

  /**
   * Academics createMany
   */
  export type AcademicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Academics.
     */
    data: AcademicsCreateManyInput | AcademicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Academics update
   */
  export type AcademicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * The data needed to update a Academics.
     */
    data: XOR<AcademicsUpdateInput, AcademicsUncheckedUpdateInput>
    /**
     * Choose, which Academics to update.
     */
    where: AcademicsWhereUniqueInput
  }

  /**
   * Academics updateMany
   */
  export type AcademicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Academics.
     */
    data: XOR<AcademicsUpdateManyMutationInput, AcademicsUncheckedUpdateManyInput>
    /**
     * Filter which Academics to update
     */
    where?: AcademicsWhereInput
    /**
     * Limit how many Academics to update.
     */
    limit?: number
  }

  /**
   * Academics upsert
   */
  export type AcademicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * The filter to search for the Academics to update in case it exists.
     */
    where: AcademicsWhereUniqueInput
    /**
     * In case the Academics found by the `where` argument doesn't exist, create a new Academics with this data.
     */
    create: XOR<AcademicsCreateInput, AcademicsUncheckedCreateInput>
    /**
     * In case the Academics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicsUpdateInput, AcademicsUncheckedUpdateInput>
  }

  /**
   * Academics delete
   */
  export type AcademicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
    /**
     * Filter which Academics to delete.
     */
    where: AcademicsWhereUniqueInput
  }

  /**
   * Academics deleteMany
   */
  export type AcademicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Academics to delete
     */
    where?: AcademicsWhereInput
    /**
     * Limit how many Academics to delete.
     */
    limit?: number
  }

  /**
   * Academics without action
   */
  export type AcademicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academics
     */
    select?: AcademicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academics
     */
    omit?: AcademicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicsInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessages
   */

  export type AggregateChatMessages = {
    _count: ChatMessagesCountAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  export type ChatMessagesMinAggregateOutputType = {
    MessageId: string | null
    Pid: string | null
    Tid: string | null
    Sender: $Enums.Role | null
    Content: string | null
    Date: Date | null
  }

  export type ChatMessagesMaxAggregateOutputType = {
    MessageId: string | null
    Pid: string | null
    Tid: string | null
    Sender: $Enums.Role | null
    Content: string | null
    Date: Date | null
  }

  export type ChatMessagesCountAggregateOutputType = {
    MessageId: number
    Pid: number
    Tid: number
    Sender: number
    Content: number
    Date: number
    _all: number
  }


  export type ChatMessagesMinAggregateInputType = {
    MessageId?: true
    Pid?: true
    Tid?: true
    Sender?: true
    Content?: true
    Date?: true
  }

  export type ChatMessagesMaxAggregateInputType = {
    MessageId?: true
    Pid?: true
    Tid?: true
    Sender?: true
    Content?: true
    Date?: true
  }

  export type ChatMessagesCountAggregateInputType = {
    MessageId?: true
    Pid?: true
    Tid?: true
    Sender?: true
    Content?: true
    Date?: true
    _all?: true
  }

  export type ChatMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to aggregate.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type GetChatMessagesAggregateType<T extends ChatMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessages[P]>
      : GetScalarType<T[P], AggregateChatMessages[P]>
  }




  export type ChatMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithAggregationInput | ChatMessagesOrderByWithAggregationInput[]
    by: ChatMessagesScalarFieldEnum[] | ChatMessagesScalarFieldEnum
    having?: ChatMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessagesCountAggregateInputType | true
    _min?: ChatMessagesMinAggregateInputType
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type ChatMessagesGroupByOutputType = {
    MessageId: string
    Pid: string
    Tid: string
    Sender: $Enums.Role
    Content: string
    Date: Date
    _count: ChatMessagesCountAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  type GetChatMessagesGroupByPayload<T extends ChatMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageId?: boolean
    Pid?: boolean
    Tid?: boolean
    Sender?: boolean
    Content?: boolean
    Date?: boolean
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessages"]>



  export type ChatMessagesSelectScalar = {
    MessageId?: boolean
    Pid?: boolean
    Tid?: boolean
    Sender?: boolean
    Content?: boolean
    Date?: boolean
  }

  export type ChatMessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MessageId" | "Pid" | "Tid" | "Sender" | "Content" | "Date", ExtArgs["result"]["chatMessages"]>
  export type ChatMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $ChatMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessages"
    objects: {
      Parent: Prisma.$ParentPayload<ExtArgs>
      Teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MessageId: string
      Pid: string
      Tid: string
      Sender: $Enums.Role
      Content: string
      Date: Date
    }, ExtArgs["result"]["chatMessages"]>
    composites: {}
  }

  type ChatMessagesGetPayload<S extends boolean | null | undefined | ChatMessagesDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagesPayload, S>

  type ChatMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessagesCountAggregateInputType | true
    }

  export interface ChatMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessages'], meta: { name: 'ChatMessages' } }
    /**
     * Find zero or one ChatMessages that matches the filter.
     * @param {ChatMessagesFindUniqueArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessagesFindUniqueArgs>(args: SelectSubset<T, ChatMessagesFindUniqueArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessagesFindUniqueOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessagesFindFirstArgs>(args?: SelectSubset<T, ChatMessagesFindFirstArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany({ take: 10 })
     * 
     * // Only select the `MessageId`
     * const chatMessagesWithMessageIdOnly = await prisma.chatMessages.findMany({ select: { MessageId: true } })
     * 
     */
    findMany<T extends ChatMessagesFindManyArgs>(args?: SelectSubset<T, ChatMessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessages.
     * @param {ChatMessagesCreateArgs} args - Arguments to create a ChatMessages.
     * @example
     * // Create one ChatMessages
     * const ChatMessages = await prisma.chatMessages.create({
     *   data: {
     *     // ... data to create a ChatMessages
     *   }
     * })
     * 
     */
    create<T extends ChatMessagesCreateArgs>(args: SelectSubset<T, ChatMessagesCreateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessagesCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessages = await prisma.chatMessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessagesCreateManyArgs>(args?: SelectSubset<T, ChatMessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessages.
     * @param {ChatMessagesDeleteArgs} args - Arguments to delete one ChatMessages.
     * @example
     * // Delete one ChatMessages
     * const ChatMessages = await prisma.chatMessages.delete({
     *   where: {
     *     // ... filter to delete one ChatMessages
     *   }
     * })
     * 
     */
    delete<T extends ChatMessagesDeleteArgs>(args: SelectSubset<T, ChatMessagesDeleteArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessages.
     * @param {ChatMessagesUpdateArgs} args - Arguments to update one ChatMessages.
     * @example
     * // Update one ChatMessages
     * const chatMessages = await prisma.chatMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessagesUpdateArgs>(args: SelectSubset<T, ChatMessagesUpdateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessagesDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessagesDeleteManyArgs>(args?: SelectSubset<T, ChatMessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessages = await prisma.chatMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessagesUpdateManyArgs>(args: SelectSubset<T, ChatMessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessages.
     * @param {ChatMessagesUpsertArgs} args - Arguments to update or create a ChatMessages.
     * @example
     * // Update or create a ChatMessages
     * const chatMessages = await prisma.chatMessages.upsert({
     *   create: {
     *     // ... data to create a ChatMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessages we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessagesUpsertArgs>(args: SelectSubset<T, ChatMessagesUpsertArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessages.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessagesCountArgs>(
      args?: Subset<T, ChatMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessagesAggregateArgs>(args: Subset<T, ChatMessagesAggregateArgs>): Prisma.PrismaPromise<GetChatMessagesAggregateType<T>>

    /**
     * Group by ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessagesGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessages model
   */
  readonly fields: ChatMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessages model
   */
  interface ChatMessagesFieldRefs {
    readonly MessageId: FieldRef<"ChatMessages", 'String'>
    readonly Pid: FieldRef<"ChatMessages", 'String'>
    readonly Tid: FieldRef<"ChatMessages", 'String'>
    readonly Sender: FieldRef<"ChatMessages", 'Role'>
    readonly Content: FieldRef<"ChatMessages", 'String'>
    readonly Date: FieldRef<"ChatMessages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessages findUnique
   */
  export type ChatMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findUniqueOrThrow
   */
  export type ChatMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findFirst
   */
  export type ChatMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findFirstOrThrow
   */
  export type ChatMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findMany
   */
  export type ChatMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages create
   */
  export type ChatMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessages.
     */
    data: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
  }

  /**
   * ChatMessages createMany
   */
  export type ChatMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessagesCreateManyInput | ChatMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessages update
   */
  export type ChatMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessages.
     */
    data: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
    /**
     * Choose, which ChatMessages to update.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages updateMany
   */
  export type ChatMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessages upsert
   */
  export type ChatMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessages to update in case it exists.
     */
    where: ChatMessagesWhereUniqueInput
    /**
     * In case the ChatMessages found by the `where` argument doesn't exist, create a new ChatMessages with this data.
     */
    create: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
    /**
     * In case the ChatMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
  }

  /**
   * ChatMessages delete
   */
  export type ChatMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter which ChatMessages to delete.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages deleteMany
   */
  export type ChatMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessages without action
   */
  export type ChatMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    email: 'email',
    phoneNumber: 'phoneNumber',
    AuthFile: 'AuthFile',
    role: 'role',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    UserId: 'UserId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    Pid: 'Pid',
    StudentName: 'StudentName',
    ClassId: 'ClassId',
    ParentName: 'ParentName'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    Tid: 'Tid',
    TeacherName: 'TeacherName'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    Sid: 'Sid',
    Name: 'Name',
    ClassId: 'ClassId',
    TeacherId: 'TeacherId'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    ClassTeacherId: 'ClassTeacherId'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const AnnoucementsScalarFieldEnum: {
    id: 'id',
    Text: 'Text',
    SenderId: 'SenderId',
    Title: 'Title',
    Date: 'Date',
    ClassID: 'ClassID'
  };

  export type AnnoucementsScalarFieldEnum = (typeof AnnoucementsScalarFieldEnum)[keyof typeof AnnoucementsScalarFieldEnum]


  export const Meeting_RequestScalarFieldEnum: {
    id: 'id',
    ParentId: 'ParentId',
    date: 'date',
    content: 'content',
    TeacherId: 'TeacherId',
    MeetStatus: 'MeetStatus',
    Rejection_Reason: 'Rejection_Reason'
  };

  export type Meeting_RequestScalarFieldEnum = (typeof Meeting_RequestScalarFieldEnum)[keyof typeof Meeting_RequestScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    date: 'date',
    isPresent: 'isPresent',
    Issue_For: 'Issue_For',
    ParentId: 'ParentId'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AcademicsScalarFieldEnum: {
    ExamName: 'ExamName',
    id: 'id',
    Pid: 'Pid',
    SubjectID: 'SubjectID',
    Grade: 'Grade',
    ReportLink: 'ReportLink',
    Date: 'Date',
    TeacherID: 'TeacherID'
  };

  export type AcademicsScalarFieldEnum = (typeof AcademicsScalarFieldEnum)[keyof typeof AcademicsScalarFieldEnum]


  export const ChatMessagesScalarFieldEnum: {
    MessageId: 'MessageId',
    Pid: 'Pid',
    Tid: 'Tid',
    Sender: 'Sender',
    Content: 'Content',
    Date: 'Date'
  };

  export type ChatMessagesScalarFieldEnum = (typeof ChatMessagesScalarFieldEnum)[keyof typeof ChatMessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    email: 'email',
    phoneNumber: 'phoneNumber',
    AuthFile: 'AuthFile'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AdminOrderByRelevanceFieldEnum: {
    id: 'id',
    UserId: 'UserId'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const ParentOrderByRelevanceFieldEnum: {
    Pid: 'Pid',
    StudentName: 'StudentName',
    ClassId: 'ClassId',
    ParentName: 'ParentName'
  };

  export type ParentOrderByRelevanceFieldEnum = (typeof ParentOrderByRelevanceFieldEnum)[keyof typeof ParentOrderByRelevanceFieldEnum]


  export const TeacherOrderByRelevanceFieldEnum: {
    Tid: 'Tid',
    TeacherName: 'TeacherName'
  };

  export type TeacherOrderByRelevanceFieldEnum = (typeof TeacherOrderByRelevanceFieldEnum)[keyof typeof TeacherOrderByRelevanceFieldEnum]


  export const SubjectOrderByRelevanceFieldEnum: {
    Sid: 'Sid',
    Name: 'Name',
    ClassId: 'ClassId',
    TeacherId: 'TeacherId'
  };

  export type SubjectOrderByRelevanceFieldEnum = (typeof SubjectOrderByRelevanceFieldEnum)[keyof typeof SubjectOrderByRelevanceFieldEnum]


  export const ClassOrderByRelevanceFieldEnum: {
    id: 'id',
    Name: 'Name',
    ClassTeacherId: 'ClassTeacherId'
  };

  export type ClassOrderByRelevanceFieldEnum = (typeof ClassOrderByRelevanceFieldEnum)[keyof typeof ClassOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AnnoucementsOrderByRelevanceFieldEnum: {
    id: 'id',
    Text: 'Text',
    SenderId: 'SenderId',
    Title: 'Title',
    ClassID: 'ClassID'
  };

  export type AnnoucementsOrderByRelevanceFieldEnum = (typeof AnnoucementsOrderByRelevanceFieldEnum)[keyof typeof AnnoucementsOrderByRelevanceFieldEnum]


  export const Meeting_RequestOrderByRelevanceFieldEnum: {
    id: 'id',
    ParentId: 'ParentId',
    content: 'content',
    TeacherId: 'TeacherId',
    Rejection_Reason: 'Rejection_Reason'
  };

  export type Meeting_RequestOrderByRelevanceFieldEnum = (typeof Meeting_RequestOrderByRelevanceFieldEnum)[keyof typeof Meeting_RequestOrderByRelevanceFieldEnum]


  export const AttendanceOrderByRelevanceFieldEnum: {
    Issue_For: 'Issue_For',
    ParentId: 'ParentId'
  };

  export type AttendanceOrderByRelevanceFieldEnum = (typeof AttendanceOrderByRelevanceFieldEnum)[keyof typeof AttendanceOrderByRelevanceFieldEnum]


  export const AcademicsOrderByRelevanceFieldEnum: {
    ExamName: 'ExamName',
    id: 'id',
    Pid: 'Pid',
    SubjectID: 'SubjectID',
    Grade: 'Grade',
    ReportLink: 'ReportLink',
    TeacherID: 'TeacherID'
  };

  export type AcademicsOrderByRelevanceFieldEnum = (typeof AcademicsOrderByRelevanceFieldEnum)[keyof typeof AcademicsOrderByRelevanceFieldEnum]


  export const ChatMessagesOrderByRelevanceFieldEnum: {
    MessageId: 'MessageId',
    Pid: 'Pid',
    Tid: 'Tid',
    Content: 'Content'
  };

  export type ChatMessagesOrderByRelevanceFieldEnum = (typeof ChatMessagesOrderByRelevanceFieldEnum)[keyof typeof ChatMessagesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StatusMeet'
   */
  export type EnumStatusMeetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusMeet'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    AuthFile?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    Parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    AuthFile?: SortOrder
    role?: SortOrder
    status?: SortOrder
    Parent?: ParentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    Admin?: AdminOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    AuthFile?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    Parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    AuthFile?: SortOrder
    role?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    AuthFile?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    UserId?: StringFilter<"Admin"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    UserId?: SortOrder
    User?: UserOrderByWithRelationInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    UserId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "UserId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    UserId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    UserId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    Pid?: StringFilter<"Parent"> | string
    StudentName?: StringFilter<"Parent"> | string
    ClassId?: StringFilter<"Parent"> | string
    ParentName?: StringFilter<"Parent"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    MeetReqSend?: Meeting_RequestListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Academics?: AcademicsListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
    ParentName?: SortOrder
    User?: UserOrderByWithRelationInput
    Class?: ClassOrderByWithRelationInput
    MeetReqSend?: Meeting_RequestOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
    Academics?: AcademicsOrderByRelationAggregateInput
    ChatMessages?: ChatMessagesOrderByRelationAggregateInput
    _relevance?: ParentOrderByRelevanceInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    Pid?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    StudentName?: StringFilter<"Parent"> | string
    ClassId?: StringFilter<"Parent"> | string
    ParentName?: StringFilter<"Parent"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    MeetReqSend?: Meeting_RequestListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Academics?: AcademicsListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
  }, "Pid" | "Pid">

  export type ParentOrderByWithAggregationInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
    ParentName?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    Pid?: StringWithAggregatesFilter<"Parent"> | string
    StudentName?: StringWithAggregatesFilter<"Parent"> | string
    ClassId?: StringWithAggregatesFilter<"Parent"> | string
    ParentName?: StringWithAggregatesFilter<"Parent"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    Tid?: StringFilter<"Teacher"> | string
    TeacherName?: StringFilter<"Teacher"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    MeetReqRecieve?: Meeting_RequestListRelationFilter
    Subjects?: SubjectListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
    Announcements?: AnnoucementsListRelationFilter
    Academics?: AcademicsListRelationFilter
    Class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }

  export type TeacherOrderByWithRelationInput = {
    Tid?: SortOrder
    TeacherName?: SortOrder
    User?: UserOrderByWithRelationInput
    MeetReqRecieve?: Meeting_RequestOrderByRelationAggregateInput
    Subjects?: SubjectOrderByRelationAggregateInput
    ChatMessages?: ChatMessagesOrderByRelationAggregateInput
    Announcements?: AnnoucementsOrderByRelationAggregateInput
    Academics?: AcademicsOrderByRelationAggregateInput
    Class?: ClassOrderByWithRelationInput
    _relevance?: TeacherOrderByRelevanceInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    Tid?: string
    TeacherName?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    MeetReqRecieve?: Meeting_RequestListRelationFilter
    Subjects?: SubjectListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
    Announcements?: AnnoucementsListRelationFilter
    Academics?: AcademicsListRelationFilter
    Class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }, "Tid" | "Tid" | "TeacherName">

  export type TeacherOrderByWithAggregationInput = {
    Tid?: SortOrder
    TeacherName?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    Tid?: StringWithAggregatesFilter<"Teacher"> | string
    TeacherName?: StringWithAggregatesFilter<"Teacher"> | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    Sid?: StringFilter<"Subject"> | string
    Name?: StringFilter<"Subject"> | string
    ClassId?: StringFilter<"Subject"> | string
    TeacherId?: StringFilter<"Subject"> | string
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Academics?: AcademicsListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    Sid?: SortOrder
    Name?: SortOrder
    ClassId?: SortOrder
    TeacherId?: SortOrder
    Class?: ClassOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    Academics?: AcademicsOrderByRelationAggregateInput
    _relevance?: SubjectOrderByRelevanceInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    Sid?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    Name?: StringFilter<"Subject"> | string
    ClassId?: StringFilter<"Subject"> | string
    TeacherId?: StringFilter<"Subject"> | string
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Academics?: AcademicsListRelationFilter
  }, "Sid">

  export type SubjectOrderByWithAggregationInput = {
    Sid?: SortOrder
    Name?: SortOrder
    ClassId?: SortOrder
    TeacherId?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    Sid?: StringWithAggregatesFilter<"Subject"> | string
    Name?: StringWithAggregatesFilter<"Subject"> | string
    ClassId?: StringWithAggregatesFilter<"Subject"> | string
    TeacherId?: StringWithAggregatesFilter<"Subject"> | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    Name?: StringFilter<"Class"> | string
    ClassTeacherId?: StringFilter<"Class"> | string
    Parent?: ParentListRelationFilter
    Subjects?: SubjectListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Annoucements?: AnnoucementsListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    ClassTeacherId?: SortOrder
    Parent?: ParentOrderByRelationAggregateInput
    Subjects?: SubjectOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
    Teacher?: TeacherOrderByWithRelationInput
    Annoucements?: AnnoucementsOrderByRelationAggregateInput
    _relevance?: ClassOrderByRelevanceInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    Name?: string
    ClassTeacherId?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    Parent?: ParentListRelationFilter
    Subjects?: SubjectListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Annoucements?: AnnoucementsListRelationFilter
  }, "id" | "Name" | "ClassTeacherId">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    ClassTeacherId?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    Name?: StringWithAggregatesFilter<"Class"> | string
    ClassTeacherId?: StringWithAggregatesFilter<"Class"> | string
  }

  export type AnnoucementsWhereInput = {
    AND?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    OR?: AnnoucementsWhereInput[]
    NOT?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    id?: StringFilter<"Annoucements"> | string
    Text?: StringFilter<"Annoucements"> | string
    SenderId?: StringNullableFilter<"Annoucements"> | string | null
    Title?: StringFilter<"Annoucements"> | string
    Date?: DateTimeFilter<"Annoucements"> | Date | string
    ClassID?: StringNullableFilter<"Annoucements"> | string | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    Class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }

  export type AnnoucementsOrderByWithRelationInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrderInput | SortOrder
    Title?: SortOrder
    Date?: SortOrder
    ClassID?: SortOrderInput | SortOrder
    Teacher?: TeacherOrderByWithRelationInput
    Class?: ClassOrderByWithRelationInput
    _relevance?: AnnoucementsOrderByRelevanceInput
  }

  export type AnnoucementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    OR?: AnnoucementsWhereInput[]
    NOT?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    Text?: StringFilter<"Annoucements"> | string
    SenderId?: StringNullableFilter<"Annoucements"> | string | null
    Title?: StringFilter<"Annoucements"> | string
    Date?: DateTimeFilter<"Annoucements"> | Date | string
    ClassID?: StringNullableFilter<"Annoucements"> | string | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    Class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }, "id">

  export type AnnoucementsOrderByWithAggregationInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrderInput | SortOrder
    Title?: SortOrder
    Date?: SortOrder
    ClassID?: SortOrderInput | SortOrder
    _count?: AnnoucementsCountOrderByAggregateInput
    _max?: AnnoucementsMaxOrderByAggregateInput
    _min?: AnnoucementsMinOrderByAggregateInput
  }

  export type AnnoucementsScalarWhereWithAggregatesInput = {
    AND?: AnnoucementsScalarWhereWithAggregatesInput | AnnoucementsScalarWhereWithAggregatesInput[]
    OR?: AnnoucementsScalarWhereWithAggregatesInput[]
    NOT?: AnnoucementsScalarWhereWithAggregatesInput | AnnoucementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Annoucements"> | string
    Text?: StringWithAggregatesFilter<"Annoucements"> | string
    SenderId?: StringNullableWithAggregatesFilter<"Annoucements"> | string | null
    Title?: StringWithAggregatesFilter<"Annoucements"> | string
    Date?: DateTimeWithAggregatesFilter<"Annoucements"> | Date | string
    ClassID?: StringNullableWithAggregatesFilter<"Annoucements"> | string | null
  }

  export type Meeting_RequestWhereInput = {
    AND?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    OR?: Meeting_RequestWhereInput[]
    NOT?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    id?: StringFilter<"Meeting_Request"> | string
    ParentId?: StringFilter<"Meeting_Request"> | string
    date?: DateTimeFilter<"Meeting_Request"> | Date | string
    content?: StringFilter<"Meeting_Request"> | string
    TeacherId?: StringFilter<"Meeting_Request"> | string
    MeetStatus?: EnumStatusMeetFilter<"Meeting_Request"> | $Enums.StatusMeet
    Rejection_Reason?: StringNullableFilter<"Meeting_Request"> | string | null
    Sender?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type Meeting_RequestOrderByWithRelationInput = {
    id?: SortOrder
    ParentId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
    MeetStatus?: SortOrder
    Rejection_Reason?: SortOrderInput | SortOrder
    Sender?: ParentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    _relevance?: Meeting_RequestOrderByRelevanceInput
  }

  export type Meeting_RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    OR?: Meeting_RequestWhereInput[]
    NOT?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    ParentId?: StringFilter<"Meeting_Request"> | string
    date?: DateTimeFilter<"Meeting_Request"> | Date | string
    content?: StringFilter<"Meeting_Request"> | string
    TeacherId?: StringFilter<"Meeting_Request"> | string
    MeetStatus?: EnumStatusMeetFilter<"Meeting_Request"> | $Enums.StatusMeet
    Rejection_Reason?: StringNullableFilter<"Meeting_Request"> | string | null
    Sender?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type Meeting_RequestOrderByWithAggregationInput = {
    id?: SortOrder
    ParentId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
    MeetStatus?: SortOrder
    Rejection_Reason?: SortOrderInput | SortOrder
    _count?: Meeting_RequestCountOrderByAggregateInput
    _max?: Meeting_RequestMaxOrderByAggregateInput
    _min?: Meeting_RequestMinOrderByAggregateInput
  }

  export type Meeting_RequestScalarWhereWithAggregatesInput = {
    AND?: Meeting_RequestScalarWhereWithAggregatesInput | Meeting_RequestScalarWhereWithAggregatesInput[]
    OR?: Meeting_RequestScalarWhereWithAggregatesInput[]
    NOT?: Meeting_RequestScalarWhereWithAggregatesInput | Meeting_RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting_Request"> | string
    ParentId?: StringWithAggregatesFilter<"Meeting_Request"> | string
    date?: DateTimeWithAggregatesFilter<"Meeting_Request"> | Date | string
    content?: StringWithAggregatesFilter<"Meeting_Request"> | string
    TeacherId?: StringWithAggregatesFilter<"Meeting_Request"> | string
    MeetStatus?: EnumStatusMeetWithAggregatesFilter<"Meeting_Request"> | $Enums.StatusMeet
    Rejection_Reason?: StringNullableWithAggregatesFilter<"Meeting_Request"> | string | null
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    Issue_For?: StringFilter<"Attendance"> | string
    ParentId?: StringFilter<"Attendance"> | string
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    Issue_For?: SortOrder
    ParentId?: SortOrder
    Class?: ClassOrderByWithRelationInput
    Parent?: ParentOrderByWithRelationInput
    _relevance?: AttendanceOrderByRelevanceInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    Issue_For?: StringFilter<"Attendance"> | string
    ParentId?: StringFilter<"Attendance"> | string
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    Issue_For?: SortOrder
    ParentId?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    isPresent?: BoolWithAggregatesFilter<"Attendance"> | boolean
    Issue_For?: StringWithAggregatesFilter<"Attendance"> | string
    ParentId?: StringWithAggregatesFilter<"Attendance"> | string
  }

  export type AcademicsWhereInput = {
    AND?: AcademicsWhereInput | AcademicsWhereInput[]
    OR?: AcademicsWhereInput[]
    NOT?: AcademicsWhereInput | AcademicsWhereInput[]
    ExamName?: StringFilter<"Academics"> | string
    id?: StringFilter<"Academics"> | string
    Pid?: StringFilter<"Academics"> | string
    SubjectID?: StringFilter<"Academics"> | string
    Grade?: StringFilter<"Academics"> | string
    ReportLink?: StringNullableFilter<"Academics"> | string | null
    Date?: DateTimeFilter<"Academics"> | Date | string
    TeacherID?: StringFilter<"Academics"> | string
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type AcademicsOrderByWithRelationInput = {
    ExamName?: SortOrder
    id?: SortOrder
    Pid?: SortOrder
    SubjectID?: SortOrder
    Grade?: SortOrder
    ReportLink?: SortOrderInput | SortOrder
    Date?: SortOrder
    TeacherID?: SortOrder
    Teacher?: TeacherOrderByWithRelationInput
    Parent?: ParentOrderByWithRelationInput
    Subject?: SubjectOrderByWithRelationInput
    _relevance?: AcademicsOrderByRelevanceInput
  }

  export type AcademicsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcademicsWhereInput | AcademicsWhereInput[]
    OR?: AcademicsWhereInput[]
    NOT?: AcademicsWhereInput | AcademicsWhereInput[]
    ExamName?: StringFilter<"Academics"> | string
    Pid?: StringFilter<"Academics"> | string
    SubjectID?: StringFilter<"Academics"> | string
    Grade?: StringFilter<"Academics"> | string
    ReportLink?: StringNullableFilter<"Academics"> | string | null
    Date?: DateTimeFilter<"Academics"> | Date | string
    TeacherID?: StringFilter<"Academics"> | string
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id">

  export type AcademicsOrderByWithAggregationInput = {
    ExamName?: SortOrder
    id?: SortOrder
    Pid?: SortOrder
    SubjectID?: SortOrder
    Grade?: SortOrder
    ReportLink?: SortOrderInput | SortOrder
    Date?: SortOrder
    TeacherID?: SortOrder
    _count?: AcademicsCountOrderByAggregateInput
    _max?: AcademicsMaxOrderByAggregateInput
    _min?: AcademicsMinOrderByAggregateInput
  }

  export type AcademicsScalarWhereWithAggregatesInput = {
    AND?: AcademicsScalarWhereWithAggregatesInput | AcademicsScalarWhereWithAggregatesInput[]
    OR?: AcademicsScalarWhereWithAggregatesInput[]
    NOT?: AcademicsScalarWhereWithAggregatesInput | AcademicsScalarWhereWithAggregatesInput[]
    ExamName?: StringWithAggregatesFilter<"Academics"> | string
    id?: StringWithAggregatesFilter<"Academics"> | string
    Pid?: StringWithAggregatesFilter<"Academics"> | string
    SubjectID?: StringWithAggregatesFilter<"Academics"> | string
    Grade?: StringWithAggregatesFilter<"Academics"> | string
    ReportLink?: StringNullableWithAggregatesFilter<"Academics"> | string | null
    Date?: DateTimeWithAggregatesFilter<"Academics"> | Date | string
    TeacherID?: StringWithAggregatesFilter<"Academics"> | string
  }

  export type ChatMessagesWhereInput = {
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    MessageId?: StringFilter<"ChatMessages"> | string
    Pid?: StringFilter<"ChatMessages"> | string
    Tid?: StringFilter<"ChatMessages"> | string
    Sender?: EnumRoleFilter<"ChatMessages"> | $Enums.Role
    Content?: StringFilter<"ChatMessages"> | string
    Date?: DateTimeFilter<"ChatMessages"> | Date | string
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type ChatMessagesOrderByWithRelationInput = {
    MessageId?: SortOrder
    Pid?: SortOrder
    Tid?: SortOrder
    Sender?: SortOrder
    Content?: SortOrder
    Date?: SortOrder
    Parent?: ParentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    _relevance?: ChatMessagesOrderByRelevanceInput
  }

  export type ChatMessagesWhereUniqueInput = Prisma.AtLeast<{
    MessageId?: string
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    Pid?: StringFilter<"ChatMessages"> | string
    Tid?: StringFilter<"ChatMessages"> | string
    Sender?: EnumRoleFilter<"ChatMessages"> | $Enums.Role
    Content?: StringFilter<"ChatMessages"> | string
    Date?: DateTimeFilter<"ChatMessages"> | Date | string
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "MessageId">

  export type ChatMessagesOrderByWithAggregationInput = {
    MessageId?: SortOrder
    Pid?: SortOrder
    Tid?: SortOrder
    Sender?: SortOrder
    Content?: SortOrder
    Date?: SortOrder
    _count?: ChatMessagesCountOrderByAggregateInput
    _max?: ChatMessagesMaxOrderByAggregateInput
    _min?: ChatMessagesMinOrderByAggregateInput
  }

  export type ChatMessagesScalarWhereWithAggregatesInput = {
    AND?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    OR?: ChatMessagesScalarWhereWithAggregatesInput[]
    NOT?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    MessageId?: StringWithAggregatesFilter<"ChatMessages"> | string
    Pid?: StringWithAggregatesFilter<"ChatMessages"> | string
    Tid?: StringWithAggregatesFilter<"ChatMessages"> | string
    Sender?: EnumRoleWithAggregatesFilter<"ChatMessages"> | $Enums.Role
    Content?: StringWithAggregatesFilter<"ChatMessages"> | string
    Date?: DateTimeWithAggregatesFilter<"ChatMessages"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AdminCreateInput = {
    id?: string
    User: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    UserId: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    UserId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentCreateInput = {
    StudentName: string
    ParentName?: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    Pid: string
    StudentName: string
    ClassId: string
    ParentName?: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    Pid: string
    StudentName: string
    ClassId: string
    ParentName?: string
  }

  export type ParentUpdateManyMutationInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
  }

  export type ParentUncheckedUpdateManyInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsCreateNestedManyWithoutTeacherInput
    Class?: ClassCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutTeacherInput
    Class?: ClassUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUpdateManyWithoutTeacherNestedInput
    Class?: ClassUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutTeacherNestedInput
    Class?: ClassUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    Tid: string
    TeacherName: string
  }

  export type TeacherUpdateManyMutationInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCreateInput = {
    Sid?: string
    Name: string
    Class: ClassCreateNestedOneWithoutSubjectsInput
    Teacher: TeacherCreateNestedOneWithoutSubjectsInput
    Academics?: AcademicsCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    Sid?: string
    Name: string
    ClassId: string
    TeacherId: string
    Academics?: AcademicsUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    Academics?: AcademicsUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
    Academics?: AcademicsUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    Sid?: string
    Name: string
    ClassId: string
    TeacherId: string
  }

  export type SubjectUpdateManyMutationInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    id?: string
    Name: string
    Parent?: ParentCreateNestedManyWithoutClassInput
    Subjects?: SubjectCreateNestedManyWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
    Teacher: TeacherCreateNestedOneWithoutClassInput
    Annoucements?: AnnoucementsCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    Name: string
    ClassTeacherId: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    Annoucements?: AnnoucementsUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutClassNestedInput
    Annoucements?: AnnoucementsUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassTeacherId?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    Annoucements?: AnnoucementsUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    Name: string
    ClassTeacherId: string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassTeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnoucementsCreateInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
    Teacher?: TeacherCreateNestedOneWithoutAnnouncementsInput
    Class?: ClassCreateNestedOneWithoutAnnoucementsInput
  }

  export type AnnoucementsUncheckedCreateInput = {
    id?: string
    Text: string
    SenderId?: string | null
    Title: string
    Date: Date | string
    ClassID?: string | null
  }

  export type AnnoucementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUpdateOneWithoutAnnouncementsNestedInput
    Class?: ClassUpdateOneWithoutAnnoucementsNestedInput
  }

  export type AnnoucementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    SenderId?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ClassID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnoucementsCreateManyInput = {
    id?: string
    Text: string
    SenderId?: string | null
    Title: string
    Date: Date | string
    ClassID?: string | null
  }

  export type AnnoucementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnoucementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    SenderId?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ClassID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Meeting_RequestCreateInput = {
    id?: string
    date: Date | string
    content: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
    Sender: ParentCreateNestedOneWithoutMeetReqSendInput
    Teacher: TeacherCreateNestedOneWithoutMeetReqRecieveInput
  }

  export type Meeting_RequestUncheckedCreateInput = {
    id?: string
    ParentId: string
    date: Date | string
    content: string
    TeacherId: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
  }

  export type Meeting_RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
    Sender?: ParentUpdateOneRequiredWithoutMeetReqSendNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutMeetReqRecieveNestedInput
  }

  export type Meeting_RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ParentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Meeting_RequestCreateManyInput = {
    id?: string
    ParentId: string
    date: Date | string
    content: string
    TeacherId: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
  }

  export type Meeting_RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Meeting_RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ParentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateInput = {
    date: Date | string
    isPresent: boolean
    Class: ClassCreateNestedOneWithoutAttendanceInput
    Parent: ParentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    date: Date | string
    isPresent: boolean
    Issue_For: string
    ParentId: string
  }

  export type AttendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    Class?: ClassUpdateOneRequiredWithoutAttendanceNestedInput
    Parent?: ParentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    Issue_For?: StringFieldUpdateOperationsInput | string
    ParentId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyInput = {
    id?: number
    date: Date | string
    isPresent: boolean
    Issue_For: string
    ParentId: string
  }

  export type AttendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    Issue_For?: StringFieldUpdateOperationsInput | string
    ParentId?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicsCreateInput = {
    ExamName: string
    id?: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    Teacher: TeacherCreateNestedOneWithoutAcademicsInput
    Parent: ParentCreateNestedOneWithoutAcademicsInput
    Subject: SubjectCreateNestedOneWithoutAcademicsInput
  }

  export type AcademicsUncheckedCreateInput = {
    ExamName: string
    id?: string
    Pid: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    TeacherID: string
  }

  export type AcademicsUpdateInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUpdateOneRequiredWithoutAcademicsNestedInput
    Parent?: ParentUpdateOneRequiredWithoutAcademicsNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutAcademicsNestedInput
  }

  export type AcademicsUncheckedUpdateInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    TeacherID?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicsCreateManyInput = {
    ExamName: string
    id?: string
    Pid: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    TeacherID: string
  }

  export type AcademicsUpdateManyMutationInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicsUncheckedUpdateManyInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    TeacherID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessagesCreateInput = {
    MessageId?: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
    Parent: ParentCreateNestedOneWithoutChatMessagesInput
    Teacher: TeacherCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateInput = {
    MessageId?: string
    Pid: string
    Tid: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
  }

  export type ChatMessagesUpdateInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneRequiredWithoutChatMessagesNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Tid?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateManyInput = {
    MessageId?: string
    Pid: string
    Tid: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
  }

  export type ChatMessagesUpdateManyMutationInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Tid?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ParentNullableScalarRelationFilter = {
    is?: ParentWhereInput | null
    isNot?: ParentWhereInput | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    AuthFile?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    AuthFile?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    AuthFile?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type Meeting_RequestListRelationFilter = {
    every?: Meeting_RequestWhereInput
    some?: Meeting_RequestWhereInput
    none?: Meeting_RequestWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AcademicsListRelationFilter = {
    every?: AcademicsWhereInput
    some?: AcademicsWhereInput
    none?: AcademicsWhereInput
  }

  export type ChatMessagesListRelationFilter = {
    every?: ChatMessagesWhereInput
    some?: ChatMessagesWhereInput
    none?: ChatMessagesWhereInput
  }

  export type Meeting_RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademicsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentOrderByRelevanceInput = {
    fields: ParentOrderByRelevanceFieldEnum | ParentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParentCountOrderByAggregateInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
    ParentName?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
    ParentName?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
    ParentName?: SortOrder
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type AnnoucementsListRelationFilter = {
    every?: AnnoucementsWhereInput
    some?: AnnoucementsWhereInput
    none?: AnnoucementsWhereInput
  }

  export type ClassNullableScalarRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnoucementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelevanceInput = {
    fields: TeacherOrderByRelevanceFieldEnum | TeacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeacherCountOrderByAggregateInput = {
    Tid?: SortOrder
    TeacherName?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    Tid?: SortOrder
    TeacherName?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    Tid?: SortOrder
    TeacherName?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type SubjectOrderByRelevanceInput = {
    fields: SubjectOrderByRelevanceFieldEnum | SubjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubjectCountOrderByAggregateInput = {
    Sid?: SortOrder
    Name?: SortOrder
    ClassId?: SortOrder
    TeacherId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    Sid?: SortOrder
    Name?: SortOrder
    ClassId?: SortOrder
    TeacherId?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    Sid?: SortOrder
    Name?: SortOrder
    ClassId?: SortOrder
    TeacherId?: SortOrder
  }

  export type ParentListRelationFilter = {
    every?: ParentWhereInput
    some?: ParentWhereInput
    none?: ParentWhereInput
  }

  export type ParentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelevanceInput = {
    fields: ClassOrderByRelevanceFieldEnum | ClassOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    ClassTeacherId?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    ClassTeacherId?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    ClassTeacherId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnnoucementsOrderByRelevanceInput = {
    fields: AnnoucementsOrderByRelevanceFieldEnum | AnnoucementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnnoucementsCountOrderByAggregateInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrder
    Title?: SortOrder
    Date?: SortOrder
    ClassID?: SortOrder
  }

  export type AnnoucementsMaxOrderByAggregateInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrder
    Title?: SortOrder
    Date?: SortOrder
    ClassID?: SortOrder
  }

  export type AnnoucementsMinOrderByAggregateInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrder
    Title?: SortOrder
    Date?: SortOrder
    ClassID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusMeetFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMeet | EnumStatusMeetFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMeet[]
    notIn?: $Enums.StatusMeet[]
    not?: NestedEnumStatusMeetFilter<$PrismaModel> | $Enums.StatusMeet
  }

  export type ParentScalarRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type Meeting_RequestOrderByRelevanceInput = {
    fields: Meeting_RequestOrderByRelevanceFieldEnum | Meeting_RequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Meeting_RequestCountOrderByAggregateInput = {
    id?: SortOrder
    ParentId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
    MeetStatus?: SortOrder
    Rejection_Reason?: SortOrder
  }

  export type Meeting_RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    ParentId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
    MeetStatus?: SortOrder
    Rejection_Reason?: SortOrder
  }

  export type Meeting_RequestMinOrderByAggregateInput = {
    id?: SortOrder
    ParentId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
    MeetStatus?: SortOrder
    Rejection_Reason?: SortOrder
  }

  export type EnumStatusMeetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMeet | EnumStatusMeetFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMeet[]
    notIn?: $Enums.StatusMeet[]
    not?: NestedEnumStatusMeetWithAggregatesFilter<$PrismaModel> | $Enums.StatusMeet
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMeetFilter<$PrismaModel>
    _max?: NestedEnumStatusMeetFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AttendanceOrderByRelevanceInput = {
    fields: AttendanceOrderByRelevanceFieldEnum | AttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    Issue_For?: SortOrder
    ParentId?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    Issue_For?: SortOrder
    ParentId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    Issue_For?: SortOrder
    ParentId?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type AcademicsOrderByRelevanceInput = {
    fields: AcademicsOrderByRelevanceFieldEnum | AcademicsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AcademicsCountOrderByAggregateInput = {
    ExamName?: SortOrder
    id?: SortOrder
    Pid?: SortOrder
    SubjectID?: SortOrder
    Grade?: SortOrder
    ReportLink?: SortOrder
    Date?: SortOrder
    TeacherID?: SortOrder
  }

  export type AcademicsMaxOrderByAggregateInput = {
    ExamName?: SortOrder
    id?: SortOrder
    Pid?: SortOrder
    SubjectID?: SortOrder
    Grade?: SortOrder
    ReportLink?: SortOrder
    Date?: SortOrder
    TeacherID?: SortOrder
  }

  export type AcademicsMinOrderByAggregateInput = {
    ExamName?: SortOrder
    id?: SortOrder
    Pid?: SortOrder
    SubjectID?: SortOrder
    Grade?: SortOrder
    ReportLink?: SortOrder
    Date?: SortOrder
    TeacherID?: SortOrder
  }

  export type ChatMessagesOrderByRelevanceInput = {
    fields: ChatMessagesOrderByRelevanceFieldEnum | ChatMessagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatMessagesCountOrderByAggregateInput = {
    MessageId?: SortOrder
    Pid?: SortOrder
    Tid?: SortOrder
    Sender?: SortOrder
    Content?: SortOrder
    Date?: SortOrder
  }

  export type ChatMessagesMaxOrderByAggregateInput = {
    MessageId?: SortOrder
    Pid?: SortOrder
    Tid?: SortOrder
    Sender?: SortOrder
    Content?: SortOrder
    Date?: SortOrder
  }

  export type ChatMessagesMinOrderByAggregateInput = {
    MessageId?: SortOrder
    Pid?: SortOrder
    Tid?: SortOrder
    Sender?: SortOrder
    Content?: SortOrder
    Date?: SortOrder
  }

  export type ParentCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    connect?: ParentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type ParentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    connect?: ParentWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ParentUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    upsert?: ParentUpsertWithoutUserInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutUserInput, ParentUpdateWithoutUserInput>, ParentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ParentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    upsert?: ParentUpsertWithoutUserInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutUserInput, ParentUpdateWithoutUserInput>, ParentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutParentInput = {
    create?: XOR<ClassCreateWithoutParentInput, ClassUncheckedCreateWithoutParentInput>
    connectOrCreate?: ClassCreateOrConnectWithoutParentInput
    connect?: ClassWhereUniqueInput
  }

  export type Meeting_RequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<Meeting_RequestCreateWithoutSenderInput, Meeting_RequestUncheckedCreateWithoutSenderInput> | Meeting_RequestCreateWithoutSenderInput[] | Meeting_RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutSenderInput | Meeting_RequestCreateOrConnectWithoutSenderInput[]
    createMany?: Meeting_RequestCreateManySenderInputEnvelope
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutParentInput = {
    create?: XOR<AttendanceCreateWithoutParentInput, AttendanceUncheckedCreateWithoutParentInput> | AttendanceCreateWithoutParentInput[] | AttendanceUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutParentInput | AttendanceCreateOrConnectWithoutParentInput[]
    createMany?: AttendanceCreateManyParentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AcademicsCreateNestedManyWithoutParentInput = {
    create?: XOR<AcademicsCreateWithoutParentInput, AcademicsUncheckedCreateWithoutParentInput> | AcademicsCreateWithoutParentInput[] | AcademicsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutParentInput | AcademicsCreateOrConnectWithoutParentInput[]
    createMany?: AcademicsCreateManyParentInputEnvelope
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
  }

  export type ChatMessagesCreateNestedManyWithoutParentInput = {
    create?: XOR<ChatMessagesCreateWithoutParentInput, ChatMessagesUncheckedCreateWithoutParentInput> | ChatMessagesCreateWithoutParentInput[] | ChatMessagesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutParentInput | ChatMessagesCreateOrConnectWithoutParentInput[]
    createMany?: ChatMessagesCreateManyParentInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Meeting_RequestCreateWithoutSenderInput, Meeting_RequestUncheckedCreateWithoutSenderInput> | Meeting_RequestCreateWithoutSenderInput[] | Meeting_RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutSenderInput | Meeting_RequestCreateOrConnectWithoutSenderInput[]
    createMany?: Meeting_RequestCreateManySenderInputEnvelope
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<AttendanceCreateWithoutParentInput, AttendanceUncheckedCreateWithoutParentInput> | AttendanceCreateWithoutParentInput[] | AttendanceUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutParentInput | AttendanceCreateOrConnectWithoutParentInput[]
    createMany?: AttendanceCreateManyParentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AcademicsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<AcademicsCreateWithoutParentInput, AcademicsUncheckedCreateWithoutParentInput> | AcademicsCreateWithoutParentInput[] | AcademicsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutParentInput | AcademicsCreateOrConnectWithoutParentInput[]
    createMany?: AcademicsCreateManyParentInputEnvelope
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ChatMessagesCreateWithoutParentInput, ChatMessagesUncheckedCreateWithoutParentInput> | ChatMessagesCreateWithoutParentInput[] | ChatMessagesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutParentInput | ChatMessagesCreateOrConnectWithoutParentInput[]
    createMany?: ChatMessagesCreateManyParentInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentInput
    upsert?: UserUpsertWithoutParentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParentInput, UserUpdateWithoutParentInput>, UserUncheckedUpdateWithoutParentInput>
  }

  export type ClassUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<ClassCreateWithoutParentInput, ClassUncheckedCreateWithoutParentInput>
    connectOrCreate?: ClassCreateOrConnectWithoutParentInput
    upsert?: ClassUpsertWithoutParentInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutParentInput, ClassUpdateWithoutParentInput>, ClassUncheckedUpdateWithoutParentInput>
  }

  export type Meeting_RequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Meeting_RequestCreateWithoutSenderInput, Meeting_RequestUncheckedCreateWithoutSenderInput> | Meeting_RequestCreateWithoutSenderInput[] | Meeting_RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutSenderInput | Meeting_RequestCreateOrConnectWithoutSenderInput[]
    upsert?: Meeting_RequestUpsertWithWhereUniqueWithoutSenderInput | Meeting_RequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: Meeting_RequestCreateManySenderInputEnvelope
    set?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    disconnect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    delete?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    update?: Meeting_RequestUpdateWithWhereUniqueWithoutSenderInput | Meeting_RequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: Meeting_RequestUpdateManyWithWhereWithoutSenderInput | Meeting_RequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: Meeting_RequestScalarWhereInput | Meeting_RequestScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutParentNestedInput = {
    create?: XOR<AttendanceCreateWithoutParentInput, AttendanceUncheckedCreateWithoutParentInput> | AttendanceCreateWithoutParentInput[] | AttendanceUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutParentInput | AttendanceCreateOrConnectWithoutParentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutParentInput | AttendanceUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: AttendanceCreateManyParentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutParentInput | AttendanceUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutParentInput | AttendanceUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AcademicsUpdateManyWithoutParentNestedInput = {
    create?: XOR<AcademicsCreateWithoutParentInput, AcademicsUncheckedCreateWithoutParentInput> | AcademicsCreateWithoutParentInput[] | AcademicsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutParentInput | AcademicsCreateOrConnectWithoutParentInput[]
    upsert?: AcademicsUpsertWithWhereUniqueWithoutParentInput | AcademicsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: AcademicsCreateManyParentInputEnvelope
    set?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    disconnect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    delete?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    update?: AcademicsUpdateWithWhereUniqueWithoutParentInput | AcademicsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: AcademicsUpdateManyWithWhereWithoutParentInput | AcademicsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
  }

  export type ChatMessagesUpdateManyWithoutParentNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutParentInput, ChatMessagesUncheckedCreateWithoutParentInput> | ChatMessagesCreateWithoutParentInput[] | ChatMessagesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutParentInput | ChatMessagesCreateOrConnectWithoutParentInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutParentInput | ChatMessagesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ChatMessagesCreateManyParentInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutParentInput | ChatMessagesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutParentInput | ChatMessagesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Meeting_RequestCreateWithoutSenderInput, Meeting_RequestUncheckedCreateWithoutSenderInput> | Meeting_RequestCreateWithoutSenderInput[] | Meeting_RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutSenderInput | Meeting_RequestCreateOrConnectWithoutSenderInput[]
    upsert?: Meeting_RequestUpsertWithWhereUniqueWithoutSenderInput | Meeting_RequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: Meeting_RequestCreateManySenderInputEnvelope
    set?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    disconnect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    delete?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    update?: Meeting_RequestUpdateWithWhereUniqueWithoutSenderInput | Meeting_RequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: Meeting_RequestUpdateManyWithWhereWithoutSenderInput | Meeting_RequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: Meeting_RequestScalarWhereInput | Meeting_RequestScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<AttendanceCreateWithoutParentInput, AttendanceUncheckedCreateWithoutParentInput> | AttendanceCreateWithoutParentInput[] | AttendanceUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutParentInput | AttendanceCreateOrConnectWithoutParentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutParentInput | AttendanceUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: AttendanceCreateManyParentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutParentInput | AttendanceUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutParentInput | AttendanceUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AcademicsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<AcademicsCreateWithoutParentInput, AcademicsUncheckedCreateWithoutParentInput> | AcademicsCreateWithoutParentInput[] | AcademicsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutParentInput | AcademicsCreateOrConnectWithoutParentInput[]
    upsert?: AcademicsUpsertWithWhereUniqueWithoutParentInput | AcademicsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: AcademicsCreateManyParentInputEnvelope
    set?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    disconnect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    delete?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    update?: AcademicsUpdateWithWhereUniqueWithoutParentInput | AcademicsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: AcademicsUpdateManyWithWhereWithoutParentInput | AcademicsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutParentInput, ChatMessagesUncheckedCreateWithoutParentInput> | ChatMessagesCreateWithoutParentInput[] | ChatMessagesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutParentInput | ChatMessagesCreateOrConnectWithoutParentInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutParentInput | ChatMessagesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ChatMessagesCreateManyParentInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutParentInput | ChatMessagesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutParentInput | ChatMessagesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type Meeting_RequestCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Meeting_RequestCreateWithoutTeacherInput, Meeting_RequestUncheckedCreateWithoutTeacherInput> | Meeting_RequestCreateWithoutTeacherInput[] | Meeting_RequestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutTeacherInput | Meeting_RequestCreateOrConnectWithoutTeacherInput[]
    createMany?: Meeting_RequestCreateManyTeacherInputEnvelope
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type ChatMessagesCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ChatMessagesCreateWithoutTeacherInput, ChatMessagesUncheckedCreateWithoutTeacherInput> | ChatMessagesCreateWithoutTeacherInput[] | ChatMessagesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutTeacherInput | ChatMessagesCreateOrConnectWithoutTeacherInput[]
    createMany?: ChatMessagesCreateManyTeacherInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type AnnoucementsCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AnnoucementsCreateWithoutTeacherInput, AnnoucementsUncheckedCreateWithoutTeacherInput> | AnnoucementsCreateWithoutTeacherInput[] | AnnoucementsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutTeacherInput | AnnoucementsCreateOrConnectWithoutTeacherInput[]
    createMany?: AnnoucementsCreateManyTeacherInputEnvelope
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
  }

  export type AcademicsCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AcademicsCreateWithoutTeacherInput, AcademicsUncheckedCreateWithoutTeacherInput> | AcademicsCreateWithoutTeacherInput[] | AcademicsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutTeacherInput | AcademicsCreateOrConnectWithoutTeacherInput[]
    createMany?: AcademicsCreateManyTeacherInputEnvelope
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
  }

  export type ClassCreateNestedOneWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput
    connect?: ClassWhereUniqueInput
  }

  export type Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Meeting_RequestCreateWithoutTeacherInput, Meeting_RequestUncheckedCreateWithoutTeacherInput> | Meeting_RequestCreateWithoutTeacherInput[] | Meeting_RequestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutTeacherInput | Meeting_RequestCreateOrConnectWithoutTeacherInput[]
    createMany?: Meeting_RequestCreateManyTeacherInputEnvelope
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ChatMessagesCreateWithoutTeacherInput, ChatMessagesUncheckedCreateWithoutTeacherInput> | ChatMessagesCreateWithoutTeacherInput[] | ChatMessagesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutTeacherInput | ChatMessagesCreateOrConnectWithoutTeacherInput[]
    createMany?: ChatMessagesCreateManyTeacherInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AnnoucementsCreateWithoutTeacherInput, AnnoucementsUncheckedCreateWithoutTeacherInput> | AnnoucementsCreateWithoutTeacherInput[] | AnnoucementsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutTeacherInput | AnnoucementsCreateOrConnectWithoutTeacherInput[]
    createMany?: AnnoucementsCreateManyTeacherInputEnvelope
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
  }

  export type AcademicsUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AcademicsCreateWithoutTeacherInput, AcademicsUncheckedCreateWithoutTeacherInput> | AcademicsCreateWithoutTeacherInput[] | AcademicsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutTeacherInput | AcademicsCreateOrConnectWithoutTeacherInput[]
    createMany?: AcademicsCreateManyTeacherInputEnvelope
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedOneWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput
    connect?: ClassWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type Meeting_RequestUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Meeting_RequestCreateWithoutTeacherInput, Meeting_RequestUncheckedCreateWithoutTeacherInput> | Meeting_RequestCreateWithoutTeacherInput[] | Meeting_RequestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutTeacherInput | Meeting_RequestCreateOrConnectWithoutTeacherInput[]
    upsert?: Meeting_RequestUpsertWithWhereUniqueWithoutTeacherInput | Meeting_RequestUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Meeting_RequestCreateManyTeacherInputEnvelope
    set?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    disconnect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    delete?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    update?: Meeting_RequestUpdateWithWhereUniqueWithoutTeacherInput | Meeting_RequestUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Meeting_RequestUpdateManyWithWhereWithoutTeacherInput | Meeting_RequestUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Meeting_RequestScalarWhereInput | Meeting_RequestScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type ChatMessagesUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutTeacherInput, ChatMessagesUncheckedCreateWithoutTeacherInput> | ChatMessagesCreateWithoutTeacherInput[] | ChatMessagesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutTeacherInput | ChatMessagesCreateOrConnectWithoutTeacherInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutTeacherInput | ChatMessagesUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ChatMessagesCreateManyTeacherInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutTeacherInput | ChatMessagesUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutTeacherInput | ChatMessagesUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type AnnoucementsUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AnnoucementsCreateWithoutTeacherInput, AnnoucementsUncheckedCreateWithoutTeacherInput> | AnnoucementsCreateWithoutTeacherInput[] | AnnoucementsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutTeacherInput | AnnoucementsCreateOrConnectWithoutTeacherInput[]
    upsert?: AnnoucementsUpsertWithWhereUniqueWithoutTeacherInput | AnnoucementsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AnnoucementsCreateManyTeacherInputEnvelope
    set?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    disconnect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    delete?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    update?: AnnoucementsUpdateWithWhereUniqueWithoutTeacherInput | AnnoucementsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AnnoucementsUpdateManyWithWhereWithoutTeacherInput | AnnoucementsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
  }

  export type AcademicsUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AcademicsCreateWithoutTeacherInput, AcademicsUncheckedCreateWithoutTeacherInput> | AcademicsCreateWithoutTeacherInput[] | AcademicsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutTeacherInput | AcademicsCreateOrConnectWithoutTeacherInput[]
    upsert?: AcademicsUpsertWithWhereUniqueWithoutTeacherInput | AcademicsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AcademicsCreateManyTeacherInputEnvelope
    set?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    disconnect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    delete?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    update?: AcademicsUpdateWithWhereUniqueWithoutTeacherInput | AcademicsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AcademicsUpdateManyWithWhereWithoutTeacherInput | AcademicsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
  }

  export type ClassUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput
    upsert?: ClassUpsertWithoutTeacherInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutTeacherInput, ClassUpdateWithoutTeacherInput>, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Meeting_RequestCreateWithoutTeacherInput, Meeting_RequestUncheckedCreateWithoutTeacherInput> | Meeting_RequestCreateWithoutTeacherInput[] | Meeting_RequestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Meeting_RequestCreateOrConnectWithoutTeacherInput | Meeting_RequestCreateOrConnectWithoutTeacherInput[]
    upsert?: Meeting_RequestUpsertWithWhereUniqueWithoutTeacherInput | Meeting_RequestUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Meeting_RequestCreateManyTeacherInputEnvelope
    set?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    disconnect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    delete?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    connect?: Meeting_RequestWhereUniqueInput | Meeting_RequestWhereUniqueInput[]
    update?: Meeting_RequestUpdateWithWhereUniqueWithoutTeacherInput | Meeting_RequestUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Meeting_RequestUpdateManyWithWhereWithoutTeacherInput | Meeting_RequestUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Meeting_RequestScalarWhereInput | Meeting_RequestScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutTeacherInput, ChatMessagesUncheckedCreateWithoutTeacherInput> | ChatMessagesCreateWithoutTeacherInput[] | ChatMessagesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutTeacherInput | ChatMessagesCreateOrConnectWithoutTeacherInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutTeacherInput | ChatMessagesUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ChatMessagesCreateManyTeacherInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutTeacherInput | ChatMessagesUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutTeacherInput | ChatMessagesUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AnnoucementsCreateWithoutTeacherInput, AnnoucementsUncheckedCreateWithoutTeacherInput> | AnnoucementsCreateWithoutTeacherInput[] | AnnoucementsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutTeacherInput | AnnoucementsCreateOrConnectWithoutTeacherInput[]
    upsert?: AnnoucementsUpsertWithWhereUniqueWithoutTeacherInput | AnnoucementsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AnnoucementsCreateManyTeacherInputEnvelope
    set?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    disconnect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    delete?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    update?: AnnoucementsUpdateWithWhereUniqueWithoutTeacherInput | AnnoucementsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AnnoucementsUpdateManyWithWhereWithoutTeacherInput | AnnoucementsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
  }

  export type AcademicsUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AcademicsCreateWithoutTeacherInput, AcademicsUncheckedCreateWithoutTeacherInput> | AcademicsCreateWithoutTeacherInput[] | AcademicsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutTeacherInput | AcademicsCreateOrConnectWithoutTeacherInput[]
    upsert?: AcademicsUpsertWithWhereUniqueWithoutTeacherInput | AcademicsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AcademicsCreateManyTeacherInputEnvelope
    set?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    disconnect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    delete?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    update?: AcademicsUpdateWithWhereUniqueWithoutTeacherInput | AcademicsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AcademicsUpdateManyWithWhereWithoutTeacherInput | AcademicsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
  }

  export type ClassUncheckedUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput
    upsert?: ClassUpsertWithoutTeacherInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutTeacherInput, ClassUpdateWithoutTeacherInput>, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSubjectsInput
    connect?: ClassWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type AcademicsCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AcademicsCreateWithoutSubjectInput, AcademicsUncheckedCreateWithoutSubjectInput> | AcademicsCreateWithoutSubjectInput[] | AcademicsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutSubjectInput | AcademicsCreateOrConnectWithoutSubjectInput[]
    createMany?: AcademicsCreateManySubjectInputEnvelope
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
  }

  export type AcademicsUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AcademicsCreateWithoutSubjectInput, AcademicsUncheckedCreateWithoutSubjectInput> | AcademicsCreateWithoutSubjectInput[] | AcademicsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutSubjectInput | AcademicsCreateOrConnectWithoutSubjectInput[]
    createMany?: AcademicsCreateManySubjectInputEnvelope
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
  }

  export type ClassUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSubjectsInput
    upsert?: ClassUpsertWithoutSubjectsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSubjectsInput, ClassUpdateWithoutSubjectsInput>, ClassUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    upsert?: TeacherUpsertWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubjectsInput, TeacherUpdateWithoutSubjectsInput>, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type AcademicsUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AcademicsCreateWithoutSubjectInput, AcademicsUncheckedCreateWithoutSubjectInput> | AcademicsCreateWithoutSubjectInput[] | AcademicsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutSubjectInput | AcademicsCreateOrConnectWithoutSubjectInput[]
    upsert?: AcademicsUpsertWithWhereUniqueWithoutSubjectInput | AcademicsUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AcademicsCreateManySubjectInputEnvelope
    set?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    disconnect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    delete?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    update?: AcademicsUpdateWithWhereUniqueWithoutSubjectInput | AcademicsUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AcademicsUpdateManyWithWhereWithoutSubjectInput | AcademicsUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
  }

  export type AcademicsUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AcademicsCreateWithoutSubjectInput, AcademicsUncheckedCreateWithoutSubjectInput> | AcademicsCreateWithoutSubjectInput[] | AcademicsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AcademicsCreateOrConnectWithoutSubjectInput | AcademicsCreateOrConnectWithoutSubjectInput[]
    upsert?: AcademicsUpsertWithWhereUniqueWithoutSubjectInput | AcademicsUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AcademicsCreateManySubjectInputEnvelope
    set?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    disconnect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    delete?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    connect?: AcademicsWhereUniqueInput | AcademicsWhereUniqueInput[]
    update?: AcademicsUpdateWithWhereUniqueWithoutSubjectInput | AcademicsUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AcademicsUpdateManyWithWhereWithoutSubjectInput | AcademicsUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
  }

  export type ParentCreateNestedManyWithoutClassInput = {
    create?: XOR<ParentCreateWithoutClassInput, ParentUncheckedCreateWithoutClassInput> | ParentCreateWithoutClassInput[] | ParentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutClassInput | ParentCreateOrConnectWithoutClassInput[]
    createMany?: ParentCreateManyClassInputEnvelope
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutClassInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type TeacherCreateNestedOneWithoutClassInput = {
    create?: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassInput
    connect?: TeacherWhereUniqueInput
  }

  export type AnnoucementsCreateNestedManyWithoutClassInput = {
    create?: XOR<AnnoucementsCreateWithoutClassInput, AnnoucementsUncheckedCreateWithoutClassInput> | AnnoucementsCreateWithoutClassInput[] | AnnoucementsUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutClassInput | AnnoucementsCreateOrConnectWithoutClassInput[]
    createMany?: AnnoucementsCreateManyClassInputEnvelope
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
  }

  export type ParentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ParentCreateWithoutClassInput, ParentUncheckedCreateWithoutClassInput> | ParentCreateWithoutClassInput[] | ParentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutClassInput | ParentCreateOrConnectWithoutClassInput[]
    createMany?: ParentCreateManyClassInputEnvelope
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AnnoucementsUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AnnoucementsCreateWithoutClassInput, AnnoucementsUncheckedCreateWithoutClassInput> | AnnoucementsCreateWithoutClassInput[] | AnnoucementsUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutClassInput | AnnoucementsCreateOrConnectWithoutClassInput[]
    createMany?: AnnoucementsCreateManyClassInputEnvelope
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
  }

  export type ParentUpdateManyWithoutClassNestedInput = {
    create?: XOR<ParentCreateWithoutClassInput, ParentUncheckedCreateWithoutClassInput> | ParentCreateWithoutClassInput[] | ParentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutClassInput | ParentCreateOrConnectWithoutClassInput[]
    upsert?: ParentUpsertWithWhereUniqueWithoutClassInput | ParentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ParentCreateManyClassInputEnvelope
    set?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    disconnect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    delete?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    update?: ParentUpdateWithWhereUniqueWithoutClassInput | ParentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ParentUpdateManyWithWhereWithoutClassInput | ParentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ParentScalarWhereInput | ParentScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutClassNestedInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutClassInput | SubjectUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutClassInput | SubjectUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutClassInput | SubjectUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type TeacherUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassInput
    upsert?: TeacherUpsertWithoutClassInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutClassInput, TeacherUpdateWithoutClassInput>, TeacherUncheckedUpdateWithoutClassInput>
  }

  export type AnnoucementsUpdateManyWithoutClassNestedInput = {
    create?: XOR<AnnoucementsCreateWithoutClassInput, AnnoucementsUncheckedCreateWithoutClassInput> | AnnoucementsCreateWithoutClassInput[] | AnnoucementsUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutClassInput | AnnoucementsCreateOrConnectWithoutClassInput[]
    upsert?: AnnoucementsUpsertWithWhereUniqueWithoutClassInput | AnnoucementsUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AnnoucementsCreateManyClassInputEnvelope
    set?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    disconnect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    delete?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    update?: AnnoucementsUpdateWithWhereUniqueWithoutClassInput | AnnoucementsUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AnnoucementsUpdateManyWithWhereWithoutClassInput | AnnoucementsUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
  }

  export type ParentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ParentCreateWithoutClassInput, ParentUncheckedCreateWithoutClassInput> | ParentCreateWithoutClassInput[] | ParentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutClassInput | ParentCreateOrConnectWithoutClassInput[]
    upsert?: ParentUpsertWithWhereUniqueWithoutClassInput | ParentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ParentCreateManyClassInputEnvelope
    set?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    disconnect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    delete?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    update?: ParentUpdateWithWhereUniqueWithoutClassInput | ParentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ParentUpdateManyWithWhereWithoutClassInput | ParentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ParentScalarWhereInput | ParentScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput> | SubjectCreateWithoutClassInput[] | SubjectUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutClassInput | SubjectCreateOrConnectWithoutClassInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutClassInput | SubjectUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SubjectCreateManyClassInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutClassInput | SubjectUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutClassInput | SubjectUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AnnoucementsUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AnnoucementsCreateWithoutClassInput, AnnoucementsUncheckedCreateWithoutClassInput> | AnnoucementsCreateWithoutClassInput[] | AnnoucementsUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutClassInput | AnnoucementsCreateOrConnectWithoutClassInput[]
    upsert?: AnnoucementsUpsertWithWhereUniqueWithoutClassInput | AnnoucementsUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AnnoucementsCreateManyClassInputEnvelope
    set?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    disconnect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    delete?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    update?: AnnoucementsUpdateWithWhereUniqueWithoutClassInput | AnnoucementsUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AnnoucementsUpdateManyWithWhereWithoutClassInput | AnnoucementsUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<TeacherCreateWithoutAnnouncementsInput, TeacherUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAnnouncementsInput
    connect?: TeacherWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutAnnoucementsInput = {
    create?: XOR<ClassCreateWithoutAnnoucementsInput, ClassUncheckedCreateWithoutAnnoucementsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAnnoucementsInput
    connect?: ClassWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeacherUpdateOneWithoutAnnouncementsNestedInput = {
    create?: XOR<TeacherCreateWithoutAnnouncementsInput, TeacherUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAnnouncementsInput
    upsert?: TeacherUpsertWithoutAnnouncementsInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutAnnouncementsInput, TeacherUpdateWithoutAnnouncementsInput>, TeacherUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type ClassUpdateOneWithoutAnnoucementsNestedInput = {
    create?: XOR<ClassCreateWithoutAnnoucementsInput, ClassUncheckedCreateWithoutAnnoucementsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAnnoucementsInput
    upsert?: ClassUpsertWithoutAnnoucementsInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAnnoucementsInput, ClassUpdateWithoutAnnoucementsInput>, ClassUncheckedUpdateWithoutAnnoucementsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ParentCreateNestedOneWithoutMeetReqSendInput = {
    create?: XOR<ParentCreateWithoutMeetReqSendInput, ParentUncheckedCreateWithoutMeetReqSendInput>
    connectOrCreate?: ParentCreateOrConnectWithoutMeetReqSendInput
    connect?: ParentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutMeetReqRecieveInput = {
    create?: XOR<TeacherCreateWithoutMeetReqRecieveInput, TeacherUncheckedCreateWithoutMeetReqRecieveInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutMeetReqRecieveInput
    connect?: TeacherWhereUniqueInput
  }

  export type EnumStatusMeetFieldUpdateOperationsInput = {
    set?: $Enums.StatusMeet
  }

  export type ParentUpdateOneRequiredWithoutMeetReqSendNestedInput = {
    create?: XOR<ParentCreateWithoutMeetReqSendInput, ParentUncheckedCreateWithoutMeetReqSendInput>
    connectOrCreate?: ParentCreateOrConnectWithoutMeetReqSendInput
    upsert?: ParentUpsertWithoutMeetReqSendInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutMeetReqSendInput, ParentUpdateWithoutMeetReqSendInput>, ParentUncheckedUpdateWithoutMeetReqSendInput>
  }

  export type TeacherUpdateOneRequiredWithoutMeetReqRecieveNestedInput = {
    create?: XOR<TeacherCreateWithoutMeetReqRecieveInput, TeacherUncheckedCreateWithoutMeetReqRecieveInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutMeetReqRecieveInput
    upsert?: TeacherUpsertWithoutMeetReqRecieveInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutMeetReqRecieveInput, TeacherUpdateWithoutMeetReqRecieveInput>, TeacherUncheckedUpdateWithoutMeetReqRecieveInput>
  }

  export type ClassCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendanceInput
    connect?: ClassWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<ParentCreateWithoutAttendanceInput, ParentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ParentCreateOrConnectWithoutAttendanceInput
    connect?: ParentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClassUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendanceInput
    upsert?: ClassUpsertWithoutAttendanceInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendanceInput, ClassUpdateWithoutAttendanceInput>, ClassUncheckedUpdateWithoutAttendanceInput>
  }

  export type ParentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<ParentCreateWithoutAttendanceInput, ParentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ParentCreateOrConnectWithoutAttendanceInput
    upsert?: ParentUpsertWithoutAttendanceInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutAttendanceInput, ParentUpdateWithoutAttendanceInput>, ParentUncheckedUpdateWithoutAttendanceInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeacherCreateNestedOneWithoutAcademicsInput = {
    create?: XOR<TeacherCreateWithoutAcademicsInput, TeacherUncheckedCreateWithoutAcademicsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAcademicsInput
    connect?: TeacherWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutAcademicsInput = {
    create?: XOR<ParentCreateWithoutAcademicsInput, ParentUncheckedCreateWithoutAcademicsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutAcademicsInput
    connect?: ParentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutAcademicsInput = {
    create?: XOR<SubjectCreateWithoutAcademicsInput, SubjectUncheckedCreateWithoutAcademicsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAcademicsInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutAcademicsNestedInput = {
    create?: XOR<TeacherCreateWithoutAcademicsInput, TeacherUncheckedCreateWithoutAcademicsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutAcademicsInput
    upsert?: TeacherUpsertWithoutAcademicsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutAcademicsInput, TeacherUpdateWithoutAcademicsInput>, TeacherUncheckedUpdateWithoutAcademicsInput>
  }

  export type ParentUpdateOneRequiredWithoutAcademicsNestedInput = {
    create?: XOR<ParentCreateWithoutAcademicsInput, ParentUncheckedCreateWithoutAcademicsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutAcademicsInput
    upsert?: ParentUpsertWithoutAcademicsInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutAcademicsInput, ParentUpdateWithoutAcademicsInput>, ParentUncheckedUpdateWithoutAcademicsInput>
  }

  export type SubjectUpdateOneRequiredWithoutAcademicsNestedInput = {
    create?: XOR<SubjectCreateWithoutAcademicsInput, SubjectUncheckedCreateWithoutAcademicsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAcademicsInput
    upsert?: SubjectUpsertWithoutAcademicsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutAcademicsInput, SubjectUpdateWithoutAcademicsInput>, SubjectUncheckedUpdateWithoutAcademicsInput>
  }

  export type ParentCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ParentCreateWithoutChatMessagesInput, ParentUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChatMessagesInput
    connect?: ParentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<TeacherCreateWithoutChatMessagesInput, TeacherUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutChatMessagesInput
    connect?: TeacherWhereUniqueInput
  }

  export type ParentUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ParentCreateWithoutChatMessagesInput, ParentUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChatMessagesInput
    upsert?: ParentUpsertWithoutChatMessagesInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutChatMessagesInput, ParentUpdateWithoutChatMessagesInput>, ParentUncheckedUpdateWithoutChatMessagesInput>
  }

  export type TeacherUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<TeacherCreateWithoutChatMessagesInput, TeacherUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutChatMessagesInput
    upsert?: TeacherUpsertWithoutChatMessagesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutChatMessagesInput, TeacherUpdateWithoutChatMessagesInput>, TeacherUncheckedUpdateWithoutChatMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusMeetFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMeet | EnumStatusMeetFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMeet[]
    notIn?: $Enums.StatusMeet[]
    not?: NestedEnumStatusMeetFilter<$PrismaModel> | $Enums.StatusMeet
  }

  export type NestedEnumStatusMeetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMeet | EnumStatusMeetFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMeet[]
    notIn?: $Enums.StatusMeet[]
    not?: NestedEnumStatusMeetWithAggregatesFilter<$PrismaModel> | $Enums.StatusMeet
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMeetFilter<$PrismaModel>
    _max?: NestedEnumStatusMeetFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParentCreateWithoutUserInput = {
    StudentName: string
    ParentName?: string
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutUserInput = {
    StudentName: string
    ClassId: string
    ParentName?: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutUserInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateWithoutUserInput = {
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsCreateNestedManyWithoutTeacherInput
    Class?: ClassCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutTeacherInput
    Class?: ClassUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type ParentUpsertWithoutUserInput = {
    update: XOR<ParentUpdateWithoutUserInput, ParentUncheckedUpdateWithoutUserInput>
    create: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutUserInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutUserInput, ParentUncheckedUpdateWithoutUserInput>
  }

  export type ParentUpdateWithoutUserInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutUserInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUpdateManyWithoutTeacherNestedInput
    Class?: ClassUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutTeacherNestedInput
    Class?: ClassUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type ClassCreateWithoutParentInput = {
    id?: string
    Name: string
    Subjects?: SubjectCreateNestedManyWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
    Teacher: TeacherCreateNestedOneWithoutClassInput
    Annoucements?: AnnoucementsCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutParentInput = {
    id?: string
    Name: string
    ClassTeacherId: string
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    Annoucements?: AnnoucementsUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutParentInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutParentInput, ClassUncheckedCreateWithoutParentInput>
  }

  export type Meeting_RequestCreateWithoutSenderInput = {
    id?: string
    date: Date | string
    content: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
    Teacher: TeacherCreateNestedOneWithoutMeetReqRecieveInput
  }

  export type Meeting_RequestUncheckedCreateWithoutSenderInput = {
    id?: string
    date: Date | string
    content: string
    TeacherId: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
  }

  export type Meeting_RequestCreateOrConnectWithoutSenderInput = {
    where: Meeting_RequestWhereUniqueInput
    create: XOR<Meeting_RequestCreateWithoutSenderInput, Meeting_RequestUncheckedCreateWithoutSenderInput>
  }

  export type Meeting_RequestCreateManySenderInputEnvelope = {
    data: Meeting_RequestCreateManySenderInput | Meeting_RequestCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutParentInput = {
    date: Date | string
    isPresent: boolean
    Class: ClassCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutParentInput = {
    id?: number
    date: Date | string
    isPresent: boolean
    Issue_For: string
  }

  export type AttendanceCreateOrConnectWithoutParentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutParentInput, AttendanceUncheckedCreateWithoutParentInput>
  }

  export type AttendanceCreateManyParentInputEnvelope = {
    data: AttendanceCreateManyParentInput | AttendanceCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type AcademicsCreateWithoutParentInput = {
    ExamName: string
    id?: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    Teacher: TeacherCreateNestedOneWithoutAcademicsInput
    Subject: SubjectCreateNestedOneWithoutAcademicsInput
  }

  export type AcademicsUncheckedCreateWithoutParentInput = {
    ExamName: string
    id?: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    TeacherID: string
  }

  export type AcademicsCreateOrConnectWithoutParentInput = {
    where: AcademicsWhereUniqueInput
    create: XOR<AcademicsCreateWithoutParentInput, AcademicsUncheckedCreateWithoutParentInput>
  }

  export type AcademicsCreateManyParentInputEnvelope = {
    data: AcademicsCreateManyParentInput | AcademicsCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessagesCreateWithoutParentInput = {
    MessageId?: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
    Teacher: TeacherCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateWithoutParentInput = {
    MessageId?: string
    Tid: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutParentInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutParentInput, ChatMessagesUncheckedCreateWithoutParentInput>
  }

  export type ChatMessagesCreateManyParentInputEnvelope = {
    data: ChatMessagesCreateManyParentInput | ChatMessagesCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParentInput = {
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ClassUpsertWithoutParentInput = {
    update: XOR<ClassUpdateWithoutParentInput, ClassUncheckedUpdateWithoutParentInput>
    create: XOR<ClassCreateWithoutParentInput, ClassUncheckedCreateWithoutParentInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutParentInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutParentInput, ClassUncheckedUpdateWithoutParentInput>
  }

  export type ClassUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutClassNestedInput
    Annoucements?: AnnoucementsUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassTeacherId?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    Annoucements?: AnnoucementsUncheckedUpdateManyWithoutClassNestedInput
  }

  export type Meeting_RequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: Meeting_RequestWhereUniqueInput
    update: XOR<Meeting_RequestUpdateWithoutSenderInput, Meeting_RequestUncheckedUpdateWithoutSenderInput>
    create: XOR<Meeting_RequestCreateWithoutSenderInput, Meeting_RequestUncheckedCreateWithoutSenderInput>
  }

  export type Meeting_RequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: Meeting_RequestWhereUniqueInput
    data: XOR<Meeting_RequestUpdateWithoutSenderInput, Meeting_RequestUncheckedUpdateWithoutSenderInput>
  }

  export type Meeting_RequestUpdateManyWithWhereWithoutSenderInput = {
    where: Meeting_RequestScalarWhereInput
    data: XOR<Meeting_RequestUpdateManyMutationInput, Meeting_RequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type Meeting_RequestScalarWhereInput = {
    AND?: Meeting_RequestScalarWhereInput | Meeting_RequestScalarWhereInput[]
    OR?: Meeting_RequestScalarWhereInput[]
    NOT?: Meeting_RequestScalarWhereInput | Meeting_RequestScalarWhereInput[]
    id?: StringFilter<"Meeting_Request"> | string
    ParentId?: StringFilter<"Meeting_Request"> | string
    date?: DateTimeFilter<"Meeting_Request"> | Date | string
    content?: StringFilter<"Meeting_Request"> | string
    TeacherId?: StringFilter<"Meeting_Request"> | string
    MeetStatus?: EnumStatusMeetFilter<"Meeting_Request"> | $Enums.StatusMeet
    Rejection_Reason?: StringNullableFilter<"Meeting_Request"> | string | null
  }

  export type AttendanceUpsertWithWhereUniqueWithoutParentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutParentInput, AttendanceUncheckedUpdateWithoutParentInput>
    create: XOR<AttendanceCreateWithoutParentInput, AttendanceUncheckedCreateWithoutParentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutParentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutParentInput, AttendanceUncheckedUpdateWithoutParentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutParentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutParentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    Issue_For?: StringFilter<"Attendance"> | string
    ParentId?: StringFilter<"Attendance"> | string
  }

  export type AcademicsUpsertWithWhereUniqueWithoutParentInput = {
    where: AcademicsWhereUniqueInput
    update: XOR<AcademicsUpdateWithoutParentInput, AcademicsUncheckedUpdateWithoutParentInput>
    create: XOR<AcademicsCreateWithoutParentInput, AcademicsUncheckedCreateWithoutParentInput>
  }

  export type AcademicsUpdateWithWhereUniqueWithoutParentInput = {
    where: AcademicsWhereUniqueInput
    data: XOR<AcademicsUpdateWithoutParentInput, AcademicsUncheckedUpdateWithoutParentInput>
  }

  export type AcademicsUpdateManyWithWhereWithoutParentInput = {
    where: AcademicsScalarWhereInput
    data: XOR<AcademicsUpdateManyMutationInput, AcademicsUncheckedUpdateManyWithoutParentInput>
  }

  export type AcademicsScalarWhereInput = {
    AND?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
    OR?: AcademicsScalarWhereInput[]
    NOT?: AcademicsScalarWhereInput | AcademicsScalarWhereInput[]
    ExamName?: StringFilter<"Academics"> | string
    id?: StringFilter<"Academics"> | string
    Pid?: StringFilter<"Academics"> | string
    SubjectID?: StringFilter<"Academics"> | string
    Grade?: StringFilter<"Academics"> | string
    ReportLink?: StringNullableFilter<"Academics"> | string | null
    Date?: DateTimeFilter<"Academics"> | Date | string
    TeacherID?: StringFilter<"Academics"> | string
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutParentInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutParentInput, ChatMessagesUncheckedUpdateWithoutParentInput>
    create: XOR<ChatMessagesCreateWithoutParentInput, ChatMessagesUncheckedCreateWithoutParentInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutParentInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutParentInput, ChatMessagesUncheckedUpdateWithoutParentInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutParentInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutParentInput>
  }

  export type ChatMessagesScalarWhereInput = {
    AND?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    OR?: ChatMessagesScalarWhereInput[]
    NOT?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    MessageId?: StringFilter<"ChatMessages"> | string
    Pid?: StringFilter<"ChatMessages"> | string
    Tid?: StringFilter<"ChatMessages"> | string
    Sender?: EnumRoleFilter<"ChatMessages"> | $Enums.Role
    Content?: StringFilter<"ChatMessages"> | string
    Date?: DateTimeFilter<"ChatMessages"> | Date | string
  }

  export type UserCreateWithoutTeacherInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    password: string
    email?: string
    phoneNumber?: string
    AuthFile?: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type Meeting_RequestCreateWithoutTeacherInput = {
    id?: string
    date: Date | string
    content: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
    Sender: ParentCreateNestedOneWithoutMeetReqSendInput
  }

  export type Meeting_RequestUncheckedCreateWithoutTeacherInput = {
    id?: string
    ParentId: string
    date: Date | string
    content: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
  }

  export type Meeting_RequestCreateOrConnectWithoutTeacherInput = {
    where: Meeting_RequestWhereUniqueInput
    create: XOR<Meeting_RequestCreateWithoutTeacherInput, Meeting_RequestUncheckedCreateWithoutTeacherInput>
  }

  export type Meeting_RequestCreateManyTeacherInputEnvelope = {
    data: Meeting_RequestCreateManyTeacherInput | Meeting_RequestCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutTeacherInput = {
    Sid?: string
    Name: string
    Class: ClassCreateNestedOneWithoutSubjectsInput
    Academics?: AcademicsCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherInput = {
    Sid?: string
    Name: string
    ClassId: string
    Academics?: AcademicsUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectCreateManyTeacherInputEnvelope = {
    data: SubjectCreateManyTeacherInput | SubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessagesCreateWithoutTeacherInput = {
    MessageId?: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
    Parent: ParentCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateWithoutTeacherInput = {
    MessageId?: string
    Pid: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutTeacherInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutTeacherInput, ChatMessagesUncheckedCreateWithoutTeacherInput>
  }

  export type ChatMessagesCreateManyTeacherInputEnvelope = {
    data: ChatMessagesCreateManyTeacherInput | ChatMessagesCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AnnoucementsCreateWithoutTeacherInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
    Class?: ClassCreateNestedOneWithoutAnnoucementsInput
  }

  export type AnnoucementsUncheckedCreateWithoutTeacherInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
    ClassID?: string | null
  }

  export type AnnoucementsCreateOrConnectWithoutTeacherInput = {
    where: AnnoucementsWhereUniqueInput
    create: XOR<AnnoucementsCreateWithoutTeacherInput, AnnoucementsUncheckedCreateWithoutTeacherInput>
  }

  export type AnnoucementsCreateManyTeacherInputEnvelope = {
    data: AnnoucementsCreateManyTeacherInput | AnnoucementsCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AcademicsCreateWithoutTeacherInput = {
    ExamName: string
    id?: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    Parent: ParentCreateNestedOneWithoutAcademicsInput
    Subject: SubjectCreateNestedOneWithoutAcademicsInput
  }

  export type AcademicsUncheckedCreateWithoutTeacherInput = {
    ExamName: string
    id?: string
    Pid: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
  }

  export type AcademicsCreateOrConnectWithoutTeacherInput = {
    where: AcademicsWhereUniqueInput
    create: XOR<AcademicsCreateWithoutTeacherInput, AcademicsUncheckedCreateWithoutTeacherInput>
  }

  export type AcademicsCreateManyTeacherInputEnvelope = {
    data: AcademicsCreateManyTeacherInput | AcademicsCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutTeacherInput = {
    id?: string
    Name: string
    Parent?: ParentCreateNestedManyWithoutClassInput
    Subjects?: SubjectCreateNestedManyWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
    Annoucements?: AnnoucementsCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherInput = {
    id?: string
    Name: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    Annoucements?: AnnoucementsUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    AuthFile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type Meeting_RequestUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Meeting_RequestWhereUniqueInput
    update: XOR<Meeting_RequestUpdateWithoutTeacherInput, Meeting_RequestUncheckedUpdateWithoutTeacherInput>
    create: XOR<Meeting_RequestCreateWithoutTeacherInput, Meeting_RequestUncheckedCreateWithoutTeacherInput>
  }

  export type Meeting_RequestUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Meeting_RequestWhereUniqueInput
    data: XOR<Meeting_RequestUpdateWithoutTeacherInput, Meeting_RequestUncheckedUpdateWithoutTeacherInput>
  }

  export type Meeting_RequestUpdateManyWithWhereWithoutTeacherInput = {
    where: Meeting_RequestScalarWhereInput
    data: XOR<Meeting_RequestUpdateManyMutationInput, Meeting_RequestUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type SubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    Sid?: StringFilter<"Subject"> | string
    Name?: StringFilter<"Subject"> | string
    ClassId?: StringFilter<"Subject"> | string
    TeacherId?: StringFilter<"Subject"> | string
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutTeacherInput, ChatMessagesUncheckedUpdateWithoutTeacherInput>
    create: XOR<ChatMessagesCreateWithoutTeacherInput, ChatMessagesUncheckedCreateWithoutTeacherInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutTeacherInput, ChatMessagesUncheckedUpdateWithoutTeacherInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutTeacherInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AnnoucementsUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AnnoucementsWhereUniqueInput
    update: XOR<AnnoucementsUpdateWithoutTeacherInput, AnnoucementsUncheckedUpdateWithoutTeacherInput>
    create: XOR<AnnoucementsCreateWithoutTeacherInput, AnnoucementsUncheckedCreateWithoutTeacherInput>
  }

  export type AnnoucementsUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AnnoucementsWhereUniqueInput
    data: XOR<AnnoucementsUpdateWithoutTeacherInput, AnnoucementsUncheckedUpdateWithoutTeacherInput>
  }

  export type AnnoucementsUpdateManyWithWhereWithoutTeacherInput = {
    where: AnnoucementsScalarWhereInput
    data: XOR<AnnoucementsUpdateManyMutationInput, AnnoucementsUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AnnoucementsScalarWhereInput = {
    AND?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
    OR?: AnnoucementsScalarWhereInput[]
    NOT?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
    id?: StringFilter<"Annoucements"> | string
    Text?: StringFilter<"Annoucements"> | string
    SenderId?: StringNullableFilter<"Annoucements"> | string | null
    Title?: StringFilter<"Annoucements"> | string
    Date?: DateTimeFilter<"Annoucements"> | Date | string
    ClassID?: StringNullableFilter<"Annoucements"> | string | null
  }

  export type AcademicsUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AcademicsWhereUniqueInput
    update: XOR<AcademicsUpdateWithoutTeacherInput, AcademicsUncheckedUpdateWithoutTeacherInput>
    create: XOR<AcademicsCreateWithoutTeacherInput, AcademicsUncheckedCreateWithoutTeacherInput>
  }

  export type AcademicsUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AcademicsWhereUniqueInput
    data: XOR<AcademicsUpdateWithoutTeacherInput, AcademicsUncheckedUpdateWithoutTeacherInput>
  }

  export type AcademicsUpdateManyWithWhereWithoutTeacherInput = {
    where: AcademicsScalarWhereInput
    data: XOR<AcademicsUpdateManyMutationInput, AcademicsUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassUpsertWithoutTeacherInput = {
    update: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutTeacherInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
    Annoucements?: AnnoucementsUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    Annoucements?: AnnoucementsUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateWithoutSubjectsInput = {
    id?: string
    Name: string
    Parent?: ParentCreateNestedManyWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
    Teacher: TeacherCreateNestedOneWithoutClassInput
    Annoucements?: AnnoucementsCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSubjectsInput = {
    id?: string
    Name: string
    ClassTeacherId: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    Annoucements?: AnnoucementsUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSubjectsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
  }

  export type TeacherCreateWithoutSubjectsInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsCreateNestedManyWithoutTeacherInput
    Class?: ClassCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubjectsInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutTeacherInput
    Class?: ClassUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSubjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
  }

  export type AcademicsCreateWithoutSubjectInput = {
    ExamName: string
    id?: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    Teacher: TeacherCreateNestedOneWithoutAcademicsInput
    Parent: ParentCreateNestedOneWithoutAcademicsInput
  }

  export type AcademicsUncheckedCreateWithoutSubjectInput = {
    ExamName: string
    id?: string
    Pid: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    TeacherID: string
  }

  export type AcademicsCreateOrConnectWithoutSubjectInput = {
    where: AcademicsWhereUniqueInput
    create: XOR<AcademicsCreateWithoutSubjectInput, AcademicsUncheckedCreateWithoutSubjectInput>
  }

  export type AcademicsCreateManySubjectInputEnvelope = {
    data: AcademicsCreateManySubjectInput | AcademicsCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutSubjectsInput = {
    update: XOR<ClassUpdateWithoutSubjectsInput, ClassUncheckedUpdateWithoutSubjectsInput>
    create: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSubjectsInput, ClassUncheckedUpdateWithoutSubjectsInput>
  }

  export type ClassUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutClassNestedInput
    Annoucements?: AnnoucementsUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassTeacherId?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    Annoucements?: AnnoucementsUncheckedUpdateManyWithoutClassNestedInput
  }

  export type TeacherUpsertWithoutSubjectsInput = {
    update: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherUpdateWithoutSubjectsInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUpdateManyWithoutTeacherNestedInput
    Class?: ClassUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSubjectsInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutTeacherNestedInput
    Class?: ClassUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type AcademicsUpsertWithWhereUniqueWithoutSubjectInput = {
    where: AcademicsWhereUniqueInput
    update: XOR<AcademicsUpdateWithoutSubjectInput, AcademicsUncheckedUpdateWithoutSubjectInput>
    create: XOR<AcademicsCreateWithoutSubjectInput, AcademicsUncheckedCreateWithoutSubjectInput>
  }

  export type AcademicsUpdateWithWhereUniqueWithoutSubjectInput = {
    where: AcademicsWhereUniqueInput
    data: XOR<AcademicsUpdateWithoutSubjectInput, AcademicsUncheckedUpdateWithoutSubjectInput>
  }

  export type AcademicsUpdateManyWithWhereWithoutSubjectInput = {
    where: AcademicsScalarWhereInput
    data: XOR<AcademicsUpdateManyMutationInput, AcademicsUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ParentCreateWithoutClassInput = {
    StudentName: string
    ParentName?: string
    User: UserCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutClassInput = {
    Pid: string
    StudentName: string
    ParentName?: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutClassInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutClassInput, ParentUncheckedCreateWithoutClassInput>
  }

  export type ParentCreateManyClassInputEnvelope = {
    data: ParentCreateManyClassInput | ParentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutClassInput = {
    Sid?: string
    Name: string
    Teacher: TeacherCreateNestedOneWithoutSubjectsInput
    Academics?: AcademicsCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutClassInput = {
    Sid?: string
    Name: string
    TeacherId: string
    Academics?: AcademicsUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutClassInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput>
  }

  export type SubjectCreateManyClassInputEnvelope = {
    data: SubjectCreateManyClassInput | SubjectCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutClassInput = {
    date: Date | string
    isPresent: boolean
    Parent: ParentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutClassInput = {
    id?: number
    date: Date | string
    isPresent: boolean
    ParentId: string
  }

  export type AttendanceCreateOrConnectWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateManyClassInputEnvelope = {
    data: AttendanceCreateManyClassInput | AttendanceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutClassInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutClassInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutClassInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
  }

  export type AnnoucementsCreateWithoutClassInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
    Teacher?: TeacherCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnoucementsUncheckedCreateWithoutClassInput = {
    id?: string
    Text: string
    SenderId?: string | null
    Title: string
    Date: Date | string
  }

  export type AnnoucementsCreateOrConnectWithoutClassInput = {
    where: AnnoucementsWhereUniqueInput
    create: XOR<AnnoucementsCreateWithoutClassInput, AnnoucementsUncheckedCreateWithoutClassInput>
  }

  export type AnnoucementsCreateManyClassInputEnvelope = {
    data: AnnoucementsCreateManyClassInput | AnnoucementsCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type ParentUpsertWithWhereUniqueWithoutClassInput = {
    where: ParentWhereUniqueInput
    update: XOR<ParentUpdateWithoutClassInput, ParentUncheckedUpdateWithoutClassInput>
    create: XOR<ParentCreateWithoutClassInput, ParentUncheckedCreateWithoutClassInput>
  }

  export type ParentUpdateWithWhereUniqueWithoutClassInput = {
    where: ParentWhereUniqueInput
    data: XOR<ParentUpdateWithoutClassInput, ParentUncheckedUpdateWithoutClassInput>
  }

  export type ParentUpdateManyWithWhereWithoutClassInput = {
    where: ParentScalarWhereInput
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyWithoutClassInput>
  }

  export type ParentScalarWhereInput = {
    AND?: ParentScalarWhereInput | ParentScalarWhereInput[]
    OR?: ParentScalarWhereInput[]
    NOT?: ParentScalarWhereInput | ParentScalarWhereInput[]
    Pid?: StringFilter<"Parent"> | string
    StudentName?: StringFilter<"Parent"> | string
    ClassId?: StringFilter<"Parent"> | string
    ParentName?: StringFilter<"Parent"> | string
  }

  export type SubjectUpsertWithWhereUniqueWithoutClassInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutClassInput, SubjectUncheckedUpdateWithoutClassInput>
    create: XOR<SubjectCreateWithoutClassInput, SubjectUncheckedCreateWithoutClassInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutClassInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutClassInput, SubjectUncheckedUpdateWithoutClassInput>
  }

  export type SubjectUpdateManyWithWhereWithoutClassInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutClassInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassInput>
  }

  export type TeacherUpsertWithoutClassInput = {
    update: XOR<TeacherUpdateWithoutClassInput, TeacherUncheckedUpdateWithoutClassInput>
    create: XOR<TeacherCreateWithoutClassInput, TeacherUncheckedCreateWithoutClassInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutClassInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutClassInput, TeacherUncheckedUpdateWithoutClassInput>
  }

  export type TeacherUpdateWithoutClassInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutClassInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type AnnoucementsUpsertWithWhereUniqueWithoutClassInput = {
    where: AnnoucementsWhereUniqueInput
    update: XOR<AnnoucementsUpdateWithoutClassInput, AnnoucementsUncheckedUpdateWithoutClassInput>
    create: XOR<AnnoucementsCreateWithoutClassInput, AnnoucementsUncheckedCreateWithoutClassInput>
  }

  export type AnnoucementsUpdateWithWhereUniqueWithoutClassInput = {
    where: AnnoucementsWhereUniqueInput
    data: XOR<AnnoucementsUpdateWithoutClassInput, AnnoucementsUncheckedUpdateWithoutClassInput>
  }

  export type AnnoucementsUpdateManyWithWhereWithoutClassInput = {
    where: AnnoucementsScalarWhereInput
    data: XOR<AnnoucementsUpdateManyMutationInput, AnnoucementsUncheckedUpdateManyWithoutClassInput>
  }

  export type TeacherCreateWithoutAnnouncementsInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsCreateNestedManyWithoutTeacherInput
    Class?: ClassCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutAnnouncementsInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutTeacherInput
    Class?: ClassUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutAnnouncementsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutAnnouncementsInput, TeacherUncheckedCreateWithoutAnnouncementsInput>
  }

  export type ClassCreateWithoutAnnoucementsInput = {
    id?: string
    Name: string
    Parent?: ParentCreateNestedManyWithoutClassInput
    Subjects?: SubjectCreateNestedManyWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
    Teacher: TeacherCreateNestedOneWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAnnoucementsInput = {
    id?: string
    Name: string
    ClassTeacherId: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAnnoucementsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAnnoucementsInput, ClassUncheckedCreateWithoutAnnoucementsInput>
  }

  export type TeacherUpsertWithoutAnnouncementsInput = {
    update: XOR<TeacherUpdateWithoutAnnouncementsInput, TeacherUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<TeacherCreateWithoutAnnouncementsInput, TeacherUncheckedCreateWithoutAnnouncementsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutAnnouncementsInput, TeacherUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type TeacherUpdateWithoutAnnouncementsInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUpdateManyWithoutTeacherNestedInput
    Class?: ClassUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutAnnouncementsInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutTeacherNestedInput
    Class?: ClassUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type ClassUpsertWithoutAnnoucementsInput = {
    update: XOR<ClassUpdateWithoutAnnoucementsInput, ClassUncheckedUpdateWithoutAnnoucementsInput>
    create: XOR<ClassCreateWithoutAnnoucementsInput, ClassUncheckedCreateWithoutAnnoucementsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAnnoucementsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAnnoucementsInput, ClassUncheckedUpdateWithoutAnnoucementsInput>
  }

  export type ClassUpdateWithoutAnnoucementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAnnoucementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassTeacherId?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ParentCreateWithoutMeetReqSendInput = {
    StudentName: string
    ParentName?: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutMeetReqSendInput = {
    Pid: string
    StudentName: string
    ClassId: string
    ParentName?: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutMeetReqSendInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutMeetReqSendInput, ParentUncheckedCreateWithoutMeetReqSendInput>
  }

  export type TeacherCreateWithoutMeetReqRecieveInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsCreateNestedManyWithoutTeacherInput
    Class?: ClassCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutMeetReqRecieveInput = {
    Tid: string
    TeacherName: string
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutTeacherInput
    Class?: ClassUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutMeetReqRecieveInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutMeetReqRecieveInput, TeacherUncheckedCreateWithoutMeetReqRecieveInput>
  }

  export type ParentUpsertWithoutMeetReqSendInput = {
    update: XOR<ParentUpdateWithoutMeetReqSendInput, ParentUncheckedUpdateWithoutMeetReqSendInput>
    create: XOR<ParentCreateWithoutMeetReqSendInput, ParentUncheckedCreateWithoutMeetReqSendInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutMeetReqSendInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutMeetReqSendInput, ParentUncheckedUpdateWithoutMeetReqSendInput>
  }

  export type ParentUpdateWithoutMeetReqSendInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutMeetReqSendInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TeacherUpsertWithoutMeetReqRecieveInput = {
    update: XOR<TeacherUpdateWithoutMeetReqRecieveInput, TeacherUncheckedUpdateWithoutMeetReqRecieveInput>
    create: XOR<TeacherCreateWithoutMeetReqRecieveInput, TeacherUncheckedCreateWithoutMeetReqRecieveInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutMeetReqRecieveInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutMeetReqRecieveInput, TeacherUncheckedUpdateWithoutMeetReqRecieveInput>
  }

  export type TeacherUpdateWithoutMeetReqRecieveInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUpdateManyWithoutTeacherNestedInput
    Class?: ClassUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutMeetReqRecieveInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutTeacherNestedInput
    Class?: ClassUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type ClassCreateWithoutAttendanceInput = {
    id?: string
    Name: string
    Parent?: ParentCreateNestedManyWithoutClassInput
    Subjects?: SubjectCreateNestedManyWithoutClassInput
    Teacher: TeacherCreateNestedOneWithoutClassInput
    Annoucements?: AnnoucementsCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendanceInput = {
    id?: string
    Name: string
    ClassTeacherId: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    Annoucements?: AnnoucementsUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAttendanceInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
  }

  export type ParentCreateWithoutAttendanceInput = {
    StudentName: string
    ParentName?: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutAttendanceInput = {
    Pid: string
    StudentName: string
    ClassId: string
    ParentName?: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutAttendanceInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutAttendanceInput, ParentUncheckedCreateWithoutAttendanceInput>
  }

  export type ClassUpsertWithoutAttendanceInput = {
    update: XOR<ClassUpdateWithoutAttendanceInput, ClassUncheckedUpdateWithoutAttendanceInput>
    create: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendanceInput, ClassUncheckedUpdateWithoutAttendanceInput>
  }

  export type ClassUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUpdateManyWithoutClassNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutClassNestedInput
    Annoucements?: AnnoucementsUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassTeacherId?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    Annoucements?: AnnoucementsUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ParentUpsertWithoutAttendanceInput = {
    update: XOR<ParentUpdateWithoutAttendanceInput, ParentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<ParentCreateWithoutAttendanceInput, ParentUncheckedCreateWithoutAttendanceInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutAttendanceInput, ParentUncheckedUpdateWithoutAttendanceInput>
  }

  export type ParentUpdateWithoutAttendanceInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutAttendanceInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TeacherCreateWithoutAcademicsInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsCreateNestedManyWithoutTeacherInput
    Class?: ClassCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutAcademicsInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput
    Class?: ClassUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutAcademicsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutAcademicsInput, TeacherUncheckedCreateWithoutAcademicsInput>
  }

  export type ParentCreateWithoutAcademicsInput = {
    StudentName: string
    ParentName?: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutAcademicsInput = {
    Pid: string
    StudentName: string
    ClassId: string
    ParentName?: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutAcademicsInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutAcademicsInput, ParentUncheckedCreateWithoutAcademicsInput>
  }

  export type SubjectCreateWithoutAcademicsInput = {
    Sid?: string
    Name: string
    Class: ClassCreateNestedOneWithoutSubjectsInput
    Teacher: TeacherCreateNestedOneWithoutSubjectsInput
  }

  export type SubjectUncheckedCreateWithoutAcademicsInput = {
    Sid?: string
    Name: string
    ClassId: string
    TeacherId: string
  }

  export type SubjectCreateOrConnectWithoutAcademicsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutAcademicsInput, SubjectUncheckedCreateWithoutAcademicsInput>
  }

  export type TeacherUpsertWithoutAcademicsInput = {
    update: XOR<TeacherUpdateWithoutAcademicsInput, TeacherUncheckedUpdateWithoutAcademicsInput>
    create: XOR<TeacherCreateWithoutAcademicsInput, TeacherUncheckedCreateWithoutAcademicsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutAcademicsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutAcademicsInput, TeacherUncheckedUpdateWithoutAcademicsInput>
  }

  export type TeacherUpdateWithoutAcademicsInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUpdateManyWithoutTeacherNestedInput
    Class?: ClassUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutAcademicsInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput
    Class?: ClassUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type ParentUpsertWithoutAcademicsInput = {
    update: XOR<ParentUpdateWithoutAcademicsInput, ParentUncheckedUpdateWithoutAcademicsInput>
    create: XOR<ParentCreateWithoutAcademicsInput, ParentUncheckedCreateWithoutAcademicsInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutAcademicsInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutAcademicsInput, ParentUncheckedUpdateWithoutAcademicsInput>
  }

  export type ParentUpdateWithoutAcademicsInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutAcademicsInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubjectUpsertWithoutAcademicsInput = {
    update: XOR<SubjectUpdateWithoutAcademicsInput, SubjectUncheckedUpdateWithoutAcademicsInput>
    create: XOR<SubjectCreateWithoutAcademicsInput, SubjectUncheckedCreateWithoutAcademicsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutAcademicsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutAcademicsInput, SubjectUncheckedUpdateWithoutAcademicsInput>
  }

  export type SubjectUpdateWithoutAcademicsInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type SubjectUncheckedUpdateWithoutAcademicsInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type ParentCreateWithoutChatMessagesInput = {
    StudentName: string
    ParentName?: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutChatMessagesInput = {
    Pid: string
    StudentName: string
    ClassId: string
    ParentName?: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutChatMessagesInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutChatMessagesInput, ParentUncheckedCreateWithoutChatMessagesInput>
  }

  export type TeacherCreateWithoutChatMessagesInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsCreateNestedManyWithoutTeacherInput
    Class?: ClassCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutChatMessagesInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutTeacherInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutTeacherInput
    Class?: ClassUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutChatMessagesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutChatMessagesInput, TeacherUncheckedCreateWithoutChatMessagesInput>
  }

  export type ParentUpsertWithoutChatMessagesInput = {
    update: XOR<ParentUpdateWithoutChatMessagesInput, ParentUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ParentCreateWithoutChatMessagesInput, ParentUncheckedCreateWithoutChatMessagesInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutChatMessagesInput, ParentUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ParentUpdateWithoutChatMessagesInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutChatMessagesInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TeacherUpsertWithoutChatMessagesInput = {
    update: XOR<TeacherUpdateWithoutChatMessagesInput, TeacherUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<TeacherCreateWithoutChatMessagesInput, TeacherUncheckedCreateWithoutChatMessagesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutChatMessagesInput, TeacherUncheckedUpdateWithoutChatMessagesInput>
  }

  export type TeacherUpdateWithoutChatMessagesInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUpdateManyWithoutTeacherNestedInput
    Class?: ClassUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutChatMessagesInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutTeacherNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutTeacherNestedInput
    Class?: ClassUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type Meeting_RequestCreateManySenderInput = {
    id?: string
    date: Date | string
    content: string
    TeacherId: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
  }

  export type AttendanceCreateManyParentInput = {
    id?: number
    date: Date | string
    isPresent: boolean
    Issue_For: string
  }

  export type AcademicsCreateManyParentInput = {
    ExamName: string
    id?: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    TeacherID: string
  }

  export type ChatMessagesCreateManyParentInput = {
    MessageId?: string
    Tid: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
  }

  export type Meeting_RequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
    Teacher?: TeacherUpdateOneRequiredWithoutMeetReqRecieveNestedInput
  }

  export type Meeting_RequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Meeting_RequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUpdateWithoutParentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    Class?: ClassUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    Issue_For?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    Issue_For?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicsUpdateWithoutParentInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUpdateOneRequiredWithoutAcademicsNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutAcademicsNestedInput
  }

  export type AcademicsUncheckedUpdateWithoutParentInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    TeacherID?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicsUncheckedUpdateManyWithoutParentInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    TeacherID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessagesUpdateWithoutParentInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutParentInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Tid?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutParentInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Tid?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meeting_RequestCreateManyTeacherInput = {
    id?: string
    ParentId: string
    date: Date | string
    content: string
    MeetStatus?: $Enums.StatusMeet
    Rejection_Reason?: string | null
  }

  export type SubjectCreateManyTeacherInput = {
    Sid?: string
    Name: string
    ClassId: string
  }

  export type ChatMessagesCreateManyTeacherInput = {
    MessageId?: string
    Pid: string
    Sender?: $Enums.Role
    Content: string
    Date: Date | string
  }

  export type AnnoucementsCreateManyTeacherInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
    ClassID?: string | null
  }

  export type AcademicsCreateManyTeacherInput = {
    ExamName: string
    id?: string
    Pid: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
  }

  export type Meeting_RequestUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
    Sender?: ParentUpdateOneRequiredWithoutMeetReqSendNestedInput
  }

  export type Meeting_RequestUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    ParentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Meeting_RequestUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    ParentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    MeetStatus?: EnumStatusMeetFieldUpdateOperationsInput | $Enums.StatusMeet
    Rejection_Reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectUpdateWithoutTeacherInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Class?: ClassUpdateOneRequiredWithoutSubjectsNestedInput
    Academics?: AcademicsUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    Academics?: AcademicsUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessagesUpdateWithoutTeacherInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutTeacherInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutTeacherInput = {
    MessageId?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Sender?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Content?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnoucementsUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Class?: ClassUpdateOneWithoutAnnoucementsNestedInput
  }

  export type AnnoucementsUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ClassID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnoucementsUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ClassID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcademicsUpdateWithoutTeacherInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneRequiredWithoutAcademicsNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutAcademicsNestedInput
  }

  export type AcademicsUncheckedUpdateWithoutTeacherInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicsUncheckedUpdateManyWithoutTeacherInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicsCreateManySubjectInput = {
    ExamName: string
    id?: string
    Pid: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
    TeacherID: string
  }

  export type AcademicsUpdateWithoutSubjectInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUpdateOneRequiredWithoutAcademicsNestedInput
    Parent?: ParentUpdateOneRequiredWithoutAcademicsNestedInput
  }

  export type AcademicsUncheckedUpdateWithoutSubjectInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    TeacherID?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicsUncheckedUpdateManyWithoutSubjectInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    TeacherID?: StringFieldUpdateOperationsInput | string
  }

  export type ParentCreateManyClassInput = {
    Pid: string
    StudentName: string
    ParentName?: string
  }

  export type SubjectCreateManyClassInput = {
    Sid?: string
    Name: string
    TeacherId: string
  }

  export type AttendanceCreateManyClassInput = {
    id?: number
    date: Date | string
    isPresent: boolean
    ParentId: string
  }

  export type AnnoucementsCreateManyClassInput = {
    id?: string
    Text: string
    SenderId?: string | null
    Title: string
    Date: Date | string
  }

  export type ParentUpdateWithoutClassInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutClassInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateManyWithoutClassInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ParentName?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUpdateWithoutClassInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    Academics?: AcademicsUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutClassInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
    Academics?: AcademicsUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutClassInput = {
    Sid?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutClassInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    Parent?: ParentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    ParentId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    ParentId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnoucementsUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUpdateOneWithoutAnnouncementsNestedInput
  }

  export type AnnoucementsUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    SenderId?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnoucementsUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    SenderId?: NullableStringFieldUpdateOperationsInput | string | null
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}