
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

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

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
    Parent: 'Parent',
    Teacher: 'Teacher',
    Subject: 'Subject',
    Class: 'Class',
    Annoucements: 'Annoucements',
    Meeting_Request: 'Meeting_Request',
    Attendance: 'Attendance',
    Academics: 'Academics'
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
      modelProps: "user" | "parent" | "teacher" | "subject" | "class" | "annoucements" | "meeting_Request" | "attendance" | "academics"
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
    parent?: ParentOmit
    teacher?: TeacherOmit
    subject?: SubjectOmit
    class?: ClassOmit
    annoucements?: AnnoucementsOmit
    meeting_Request?: Meeting_RequestOmit
    attendance?: AttendanceOmit
    academics?: AcademicsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Announcements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Announcements?: boolean | UserCountOutputTypeCountAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnoucementsWhereInput
  }


  /**
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    MeetReqSend: number
    Attendance: number
    Academics: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetReqSend?: boolean | ParentCountOutputTypeCountMeetReqSendArgs
    Attendance?: boolean | ParentCountOutputTypeCountAttendanceArgs
    Academics?: boolean | ParentCountOutputTypeCountAcademicsArgs
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
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    MeetReqRecieve: number
    Subjects: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetReqRecieve?: boolean | TeacherCountOutputTypeCountMeetReqRecieveArgs
    Subjects?: boolean | TeacherCountOutputTypeCountSubjectsArgs
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
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | ClassCountOutputTypeCountParentArgs
    Subjects?: boolean | ClassCountOutputTypeCountSubjectsArgs
    Attendance?: boolean | ClassCountOutputTypeCountAttendanceArgs
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
    role: $Enums.Role | null
    status: $Enums.Status | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    role: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
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
    role?: boolean
    status?: boolean
    Announcements?: boolean | User$AnnouncementsArgs<ExtArgs>
    Parent?: boolean | User$ParentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "role" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Announcements?: boolean | User$AnnouncementsArgs<ExtArgs>
    Parent?: boolean | User$ParentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Announcements: Prisma.$AnnoucementsPayload<ExtArgs>[]
      Parent: Prisma.$ParentPayload<ExtArgs> | null
      Teacher: Prisma.$TeacherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
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
    Announcements<T extends User$AnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, User$AnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoucementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Parent<T extends User$ParentArgs<ExtArgs> = {}>(args?: Subset<T, User$ParentArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends User$TeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$TeacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * User.Announcements
   */
  export type User$AnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type ParentMaxAggregateOutputType = {
    Pid: string | null
    StudentName: string | null
    ClassId: string | null
  }

  export type ParentCountAggregateOutputType = {
    Pid: number
    StudentName: number
    ClassId: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    Pid?: true
    StudentName?: true
    ClassId?: true
  }

  export type ParentMaxAggregateInputType = {
    Pid?: true
    StudentName?: true
    ClassId?: true
  }

  export type ParentCountAggregateInputType = {
    Pid?: true
    StudentName?: true
    ClassId?: true
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
    User?: boolean | UserDefaultArgs<ExtArgs>
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    MeetReqSend?: boolean | Parent$MeetReqSendArgs<ExtArgs>
    Attendance?: boolean | Parent$AttendanceArgs<ExtArgs>
    Academics?: boolean | Parent$AcademicsArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>



  export type ParentSelectScalar = {
    Pid?: boolean
    StudentName?: boolean
    ClassId?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Pid" | "StudentName" | "ClassId", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Class?: boolean | ClassDefaultArgs<ExtArgs>
    MeetReqSend?: boolean | Parent$MeetReqSendArgs<ExtArgs>
    Attendance?: boolean | Parent$AttendanceArgs<ExtArgs>
    Academics?: boolean | Parent$AcademicsArgs<ExtArgs>
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
    }
    scalars: $Extensions.GetPayloadResult<{
      Pid: string
      StudentName: string
      ClassId: string
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
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      MeetReqRecieve: Prisma.$Meeting_RequestPayload<ExtArgs>[]
      Subjects: Prisma.$SubjectPayload<ExtArgs>[]
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
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    Name: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    Name: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    Name?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    Name?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    Name?: true
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
    Parent?: boolean | Class$ParentArgs<ExtArgs>
    Subjects?: boolean | Class$SubjectsArgs<ExtArgs>
    Attendance?: boolean | Class$AttendanceArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>



  export type ClassSelectScalar = {
    id?: boolean
    Name?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | Class$ParentArgs<ExtArgs>
    Subjects?: boolean | Class$SubjectsArgs<ExtArgs>
    Attendance?: boolean | Class$AttendanceArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      Parent: Prisma.$ParentPayload<ExtArgs>[]
      Subjects: Prisma.$SubjectPayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Name: string
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
  }

  export type AnnoucementsMaxAggregateOutputType = {
    id: string | null
    Text: string | null
    SenderId: string | null
    Title: string | null
    Date: Date | null
  }

  export type AnnoucementsCountAggregateOutputType = {
    id: number
    Text: number
    SenderId: number
    Title: number
    Date: number
    _all: number
  }


  export type AnnoucementsMinAggregateInputType = {
    id?: true
    Text?: true
    SenderId?: true
    Title?: true
    Date?: true
  }

  export type AnnoucementsMaxAggregateInputType = {
    id?: true
    Text?: true
    SenderId?: true
    Title?: true
    Date?: true
  }

  export type AnnoucementsCountAggregateInputType = {
    id?: true
    Text?: true
    SenderId?: true
    Title?: true
    Date?: true
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
    SenderId: string
    Title: string
    Date: Date
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
    Sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annoucements"]>



  export type AnnoucementsSelectScalar = {
    id?: boolean
    Text?: boolean
    SenderId?: boolean
    Title?: boolean
    Date?: boolean
  }

  export type AnnoucementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Text" | "SenderId" | "Title" | "Date", ExtArgs["result"]["annoucements"]>
  export type AnnoucementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnoucementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annoucements"
    objects: {
      Sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Text: string
      SenderId: string
      Title: string
      Date: Date
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
    Sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    SenderId: string | null
    date: Date | null
    content: string | null
    TeacherId: string | null
  }

  export type Meeting_RequestMaxAggregateOutputType = {
    id: string | null
    SenderId: string | null
    date: Date | null
    content: string | null
    TeacherId: string | null
  }

  export type Meeting_RequestCountAggregateOutputType = {
    id: number
    SenderId: number
    date: number
    content: number
    TeacherId: number
    _all: number
  }


  export type Meeting_RequestMinAggregateInputType = {
    id?: true
    SenderId?: true
    date?: true
    content?: true
    TeacherId?: true
  }

  export type Meeting_RequestMaxAggregateInputType = {
    id?: true
    SenderId?: true
    date?: true
    content?: true
    TeacherId?: true
  }

  export type Meeting_RequestCountAggregateInputType = {
    id?: true
    SenderId?: true
    date?: true
    content?: true
    TeacherId?: true
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
    SenderId: string
    date: Date
    content: string
    TeacherId: string
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
    SenderId?: boolean
    date?: boolean
    content?: boolean
    TeacherId?: boolean
    Sender?: boolean | ParentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_Request"]>



  export type Meeting_RequestSelectScalar = {
    id?: boolean
    SenderId?: boolean
    date?: boolean
    content?: boolean
    TeacherId?: boolean
  }

  export type Meeting_RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "SenderId" | "date" | "content" | "TeacherId", ExtArgs["result"]["meeting_Request"]>
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
      SenderId: string
      date: Date
      content: string
      TeacherId: string
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
    readonly SenderId: FieldRef<"Meeting_Request", 'String'>
    readonly date: FieldRef<"Meeting_Request", 'DateTime'>
    readonly content: FieldRef<"Meeting_Request", 'String'>
    readonly TeacherId: FieldRef<"Meeting_Request", 'String'>
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
  }

  export type AcademicsMaxAggregateOutputType = {
    ExamName: string | null
    id: string | null
    Pid: string | null
    SubjectID: string | null
    Grade: string | null
    ReportLink: string | null
    Date: Date | null
  }

  export type AcademicsCountAggregateOutputType = {
    ExamName: number
    id: number
    Pid: number
    SubjectID: number
    Grade: number
    ReportLink: number
    Date: number
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
  }

  export type AcademicsMaxAggregateInputType = {
    ExamName?: true
    id?: true
    Pid?: true
    SubjectID?: true
    Grade?: true
    ReportLink?: true
    Date?: true
  }

  export type AcademicsCountAggregateInputType = {
    ExamName?: true
    id?: true
    Pid?: true
    SubjectID?: true
    Grade?: true
    ReportLink?: true
    Date?: true
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
  }

  export type AcademicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ExamName" | "id" | "Pid" | "SubjectID" | "Grade" | "ReportLink" | "Date", ExtArgs["result"]["academics"]>
  export type AcademicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $AcademicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Academics"
    objects: {
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
    role: 'role',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    Pid: 'Pid',
    StudentName: 'StudentName',
    ClassId: 'ClassId'
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
    Name: 'Name'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const AnnoucementsScalarFieldEnum: {
    id: 'id',
    Text: 'Text',
    SenderId: 'SenderId',
    Title: 'Title',
    Date: 'Date'
  };

  export type AnnoucementsScalarFieldEnum = (typeof AnnoucementsScalarFieldEnum)[keyof typeof AnnoucementsScalarFieldEnum]


  export const Meeting_RequestScalarFieldEnum: {
    id: 'id',
    SenderId: 'SenderId',
    date: 'date',
    content: 'content',
    TeacherId: 'TeacherId'
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
    Date: 'Date'
  };

  export type AcademicsScalarFieldEnum = (typeof AcademicsScalarFieldEnum)[keyof typeof AcademicsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ParentOrderByRelevanceFieldEnum: {
    Pid: 'Pid',
    StudentName: 'StudentName',
    ClassId: 'ClassId'
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
    Name: 'Name'
  };

  export type ClassOrderByRelevanceFieldEnum = (typeof ClassOrderByRelevanceFieldEnum)[keyof typeof ClassOrderByRelevanceFieldEnum]


  export const AnnoucementsOrderByRelevanceFieldEnum: {
    id: 'id',
    Text: 'Text',
    SenderId: 'SenderId',
    Title: 'Title'
  };

  export type AnnoucementsOrderByRelevanceFieldEnum = (typeof AnnoucementsOrderByRelevanceFieldEnum)[keyof typeof AnnoucementsOrderByRelevanceFieldEnum]


  export const Meeting_RequestOrderByRelevanceFieldEnum: {
    id: 'id',
    SenderId: 'SenderId',
    content: 'content',
    TeacherId: 'TeacherId'
  };

  export type Meeting_RequestOrderByRelevanceFieldEnum = (typeof Meeting_RequestOrderByRelevanceFieldEnum)[keyof typeof Meeting_RequestOrderByRelevanceFieldEnum]


  export const AttendanceOrderByRelevanceFieldEnum: {
    Issue_For: 'Issue_For',
    ParentId: 'ParentId'
  };

  export type AttendanceOrderByRelevanceFieldEnum = (typeof AttendanceOrderByRelevanceFieldEnum)[keyof typeof AttendanceOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AcademicsOrderByRelevanceFieldEnum: {
    ExamName: 'ExamName',
    id: 'id',
    Pid: 'Pid',
    SubjectID: 'SubjectID',
    Grade: 'Grade',
    ReportLink: 'ReportLink'
  };

  export type AcademicsOrderByRelevanceFieldEnum = (typeof AcademicsOrderByRelevanceFieldEnum)[keyof typeof AcademicsOrderByRelevanceFieldEnum]


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
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    Announcements?: AnnoucementsListRelationFilter
    Parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    Announcements?: AnnoucementsOrderByRelationAggregateInput
    Parent?: ParentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    Announcements?: AnnoucementsListRelationFilter
    Parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
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
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    Pid?: StringFilter<"Parent"> | string
    StudentName?: StringFilter<"Parent"> | string
    ClassId?: StringFilter<"Parent"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    MeetReqSend?: Meeting_RequestListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Academics?: AcademicsListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
    User?: UserOrderByWithRelationInput
    Class?: ClassOrderByWithRelationInput
    MeetReqSend?: Meeting_RequestOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
    Academics?: AcademicsOrderByRelationAggregateInput
    _relevance?: ParentOrderByRelevanceInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    Pid?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    StudentName?: StringFilter<"Parent"> | string
    ClassId?: StringFilter<"Parent"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    MeetReqSend?: Meeting_RequestListRelationFilter
    Attendance?: AttendanceListRelationFilter
    Academics?: AcademicsListRelationFilter
  }, "Pid" | "Pid">

  export type ParentOrderByWithAggregationInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
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
  }

  export type TeacherOrderByWithRelationInput = {
    Tid?: SortOrder
    TeacherName?: SortOrder
    User?: UserOrderByWithRelationInput
    MeetReqRecieve?: Meeting_RequestOrderByRelationAggregateInput
    Subjects?: SubjectOrderByRelationAggregateInput
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
    Parent?: ParentListRelationFilter
    Subjects?: SubjectListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Parent?: ParentOrderByRelationAggregateInput
    Subjects?: SubjectOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
    _relevance?: ClassOrderByRelevanceInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    Name?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    Parent?: ParentListRelationFilter
    Subjects?: SubjectListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }, "id" | "Name">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
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
  }

  export type AnnoucementsWhereInput = {
    AND?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    OR?: AnnoucementsWhereInput[]
    NOT?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    id?: StringFilter<"Annoucements"> | string
    Text?: StringFilter<"Annoucements"> | string
    SenderId?: StringFilter<"Annoucements"> | string
    Title?: StringFilter<"Annoucements"> | string
    Date?: DateTimeFilter<"Annoucements"> | Date | string
    Sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnnoucementsOrderByWithRelationInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrder
    Title?: SortOrder
    Date?: SortOrder
    Sender?: UserOrderByWithRelationInput
    _relevance?: AnnoucementsOrderByRelevanceInput
  }

  export type AnnoucementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    OR?: AnnoucementsWhereInput[]
    NOT?: AnnoucementsWhereInput | AnnoucementsWhereInput[]
    Text?: StringFilter<"Annoucements"> | string
    SenderId?: StringFilter<"Annoucements"> | string
    Title?: StringFilter<"Annoucements"> | string
    Date?: DateTimeFilter<"Annoucements"> | Date | string
    Sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnnoucementsOrderByWithAggregationInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrder
    Title?: SortOrder
    Date?: SortOrder
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
    SenderId?: StringWithAggregatesFilter<"Annoucements"> | string
    Title?: StringWithAggregatesFilter<"Annoucements"> | string
    Date?: DateTimeWithAggregatesFilter<"Annoucements"> | Date | string
  }

  export type Meeting_RequestWhereInput = {
    AND?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    OR?: Meeting_RequestWhereInput[]
    NOT?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    id?: StringFilter<"Meeting_Request"> | string
    SenderId?: StringFilter<"Meeting_Request"> | string
    date?: DateTimeFilter<"Meeting_Request"> | Date | string
    content?: StringFilter<"Meeting_Request"> | string
    TeacherId?: StringFilter<"Meeting_Request"> | string
    Sender?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type Meeting_RequestOrderByWithRelationInput = {
    id?: SortOrder
    SenderId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
    Sender?: ParentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    _relevance?: Meeting_RequestOrderByRelevanceInput
  }

  export type Meeting_RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    OR?: Meeting_RequestWhereInput[]
    NOT?: Meeting_RequestWhereInput | Meeting_RequestWhereInput[]
    SenderId?: StringFilter<"Meeting_Request"> | string
    date?: DateTimeFilter<"Meeting_Request"> | Date | string
    content?: StringFilter<"Meeting_Request"> | string
    TeacherId?: StringFilter<"Meeting_Request"> | string
    Sender?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type Meeting_RequestOrderByWithAggregationInput = {
    id?: SortOrder
    SenderId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
    _count?: Meeting_RequestCountOrderByAggregateInput
    _max?: Meeting_RequestMaxOrderByAggregateInput
    _min?: Meeting_RequestMinOrderByAggregateInput
  }

  export type Meeting_RequestScalarWhereWithAggregatesInput = {
    AND?: Meeting_RequestScalarWhereWithAggregatesInput | Meeting_RequestScalarWhereWithAggregatesInput[]
    OR?: Meeting_RequestScalarWhereWithAggregatesInput[]
    NOT?: Meeting_RequestScalarWhereWithAggregatesInput | Meeting_RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting_Request"> | string
    SenderId?: StringWithAggregatesFilter<"Meeting_Request"> | string
    date?: DateTimeWithAggregatesFilter<"Meeting_Request"> | Date | string
    content?: StringWithAggregatesFilter<"Meeting_Request"> | string
    TeacherId?: StringWithAggregatesFilter<"Meeting_Request"> | string
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
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Announcements?: AnnoucementsCreateNestedManyWithoutSenderInput
    Parent?: ParentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutSenderInput
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Announcements?: AnnoucementsUpdateManyWithoutSenderNestedInput
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutSenderNestedInput
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ParentCreateInput = {
    StudentName: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    Pid: string
    StudentName: string
    ClassId: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    Pid: string
    StudentName: string
    ClassId: string
  }

  export type ParentUpdateManyMutationInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
  }

  export type ParentUncheckedUpdateManyInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
    MeetReqRecieve?: Meeting_RequestUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
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
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    Name: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    Name: string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type AnnoucementsCreateInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
    Sender: UserCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnoucementsUncheckedCreateInput = {
    id?: string
    Text: string
    SenderId: string
    Title: string
    Date: Date | string
  }

  export type AnnoucementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Sender?: UserUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnoucementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    SenderId?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnoucementsCreateManyInput = {
    id?: string
    Text: string
    SenderId: string
    Title: string
    Date: Date | string
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
    SenderId?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meeting_RequestCreateInput = {
    id?: string
    date: Date | string
    content: string
    Sender: ParentCreateNestedOneWithoutMeetReqSendInput
    Teacher: TeacherCreateNestedOneWithoutMeetReqRecieveInput
  }

  export type Meeting_RequestUncheckedCreateInput = {
    id?: string
    SenderId: string
    date: Date | string
    content: string
    TeacherId: string
  }

  export type Meeting_RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    Sender?: ParentUpdateOneRequiredWithoutMeetReqSendNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutMeetReqRecieveNestedInput
  }

  export type Meeting_RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    SenderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type Meeting_RequestCreateManyInput = {
    id?: string
    SenderId: string
    date: Date | string
    content: string
    TeacherId: string
  }

  export type Meeting_RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type Meeting_RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    SenderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
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
  }

  export type AcademicsUpdateInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type AcademicsCreateManyInput = {
    ExamName: string
    id?: string
    Pid: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
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

  export type AnnoucementsListRelationFilter = {
    every?: AnnoucementsWhereInput
    some?: AnnoucementsWhereInput
    none?: AnnoucementsWhereInput
  }

  export type ParentNullableScalarRelationFilter = {
    is?: ParentWhereInput | null
    isNot?: ParentWhereInput | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type AnnoucementsOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
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

  export type Meeting_RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademicsOrderByRelationAggregateInput = {
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
  }

  export type ParentMaxOrderByAggregateInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    Pid?: SortOrder
    StudentName?: SortOrder
    ClassId?: SortOrder
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type SubjectOrderByRelationAggregateInput = {
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
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
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
  }

  export type AnnoucementsMaxOrderByAggregateInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrder
    Title?: SortOrder
    Date?: SortOrder
  }

  export type AnnoucementsMinOrderByAggregateInput = {
    id?: SortOrder
    Text?: SortOrder
    SenderId?: SortOrder
    Title?: SortOrder
    Date?: SortOrder
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
    SenderId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
  }

  export type Meeting_RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    SenderId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
  }

  export type Meeting_RequestMinOrderByAggregateInput = {
    id?: SortOrder
    SenderId?: SortOrder
    date?: SortOrder
    content?: SortOrder
    TeacherId?: SortOrder
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

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
  }

  export type AcademicsMaxOrderByAggregateInput = {
    ExamName?: SortOrder
    id?: SortOrder
    Pid?: SortOrder
    SubjectID?: SortOrder
    Grade?: SortOrder
    ReportLink?: SortOrder
    Date?: SortOrder
  }

  export type AcademicsMinOrderByAggregateInput = {
    ExamName?: SortOrder
    id?: SortOrder
    Pid?: SortOrder
    SubjectID?: SortOrder
    Grade?: SortOrder
    ReportLink?: SortOrder
    Date?: SortOrder
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

  export type AnnoucementsCreateNestedManyWithoutSenderInput = {
    create?: XOR<AnnoucementsCreateWithoutSenderInput, AnnoucementsUncheckedCreateWithoutSenderInput> | AnnoucementsCreateWithoutSenderInput[] | AnnoucementsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutSenderInput | AnnoucementsCreateOrConnectWithoutSenderInput[]
    createMany?: AnnoucementsCreateManySenderInputEnvelope
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
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

  export type AnnoucementsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<AnnoucementsCreateWithoutSenderInput, AnnoucementsUncheckedCreateWithoutSenderInput> | AnnoucementsCreateWithoutSenderInput[] | AnnoucementsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutSenderInput | AnnoucementsCreateOrConnectWithoutSenderInput[]
    createMany?: AnnoucementsCreateManySenderInputEnvelope
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type AnnoucementsUpdateManyWithoutSenderNestedInput = {
    create?: XOR<AnnoucementsCreateWithoutSenderInput, AnnoucementsUncheckedCreateWithoutSenderInput> | AnnoucementsCreateWithoutSenderInput[] | AnnoucementsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutSenderInput | AnnoucementsCreateOrConnectWithoutSenderInput[]
    upsert?: AnnoucementsUpsertWithWhereUniqueWithoutSenderInput | AnnoucementsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: AnnoucementsCreateManySenderInputEnvelope
    set?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    disconnect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    delete?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    update?: AnnoucementsUpdateWithWhereUniqueWithoutSenderInput | AnnoucementsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: AnnoucementsUpdateManyWithWhereWithoutSenderInput | AnnoucementsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
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

  export type AnnoucementsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<AnnoucementsCreateWithoutSenderInput, AnnoucementsUncheckedCreateWithoutSenderInput> | AnnoucementsCreateWithoutSenderInput[] | AnnoucementsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AnnoucementsCreateOrConnectWithoutSenderInput | AnnoucementsCreateOrConnectWithoutSenderInput[]
    upsert?: AnnoucementsUpsertWithWhereUniqueWithoutSenderInput | AnnoucementsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: AnnoucementsCreateManySenderInputEnvelope
    set?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    disconnect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    delete?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    connect?: AnnoucementsWhereUniqueInput | AnnoucementsWhereUniqueInput[]
    update?: AnnoucementsUpdateWithWhereUniqueWithoutSenderInput | AnnoucementsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: AnnoucementsUpdateManyWithWhereWithoutSenderInput | AnnoucementsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    upsert?: UserUpsertWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementsInput, UserUpdateWithoutAnnouncementsInput>, UserUncheckedUpdateWithoutAnnouncementsInput>
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type AnnoucementsCreateWithoutSenderInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
  }

  export type AnnoucementsUncheckedCreateWithoutSenderInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
  }

  export type AnnoucementsCreateOrConnectWithoutSenderInput = {
    where: AnnoucementsWhereUniqueInput
    create: XOR<AnnoucementsCreateWithoutSenderInput, AnnoucementsUncheckedCreateWithoutSenderInput>
  }

  export type AnnoucementsCreateManySenderInputEnvelope = {
    data: AnnoucementsCreateManySenderInput | AnnoucementsCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ParentCreateWithoutUserInput = {
    StudentName: string
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutUserInput = {
    StudentName: string
    ClassId: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutUserInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateWithoutUserInput = {
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type AnnoucementsUpsertWithWhereUniqueWithoutSenderInput = {
    where: AnnoucementsWhereUniqueInput
    update: XOR<AnnoucementsUpdateWithoutSenderInput, AnnoucementsUncheckedUpdateWithoutSenderInput>
    create: XOR<AnnoucementsCreateWithoutSenderInput, AnnoucementsUncheckedCreateWithoutSenderInput>
  }

  export type AnnoucementsUpdateWithWhereUniqueWithoutSenderInput = {
    where: AnnoucementsWhereUniqueInput
    data: XOR<AnnoucementsUpdateWithoutSenderInput, AnnoucementsUncheckedUpdateWithoutSenderInput>
  }

  export type AnnoucementsUpdateManyWithWhereWithoutSenderInput = {
    where: AnnoucementsScalarWhereInput
    data: XOR<AnnoucementsUpdateManyMutationInput, AnnoucementsUncheckedUpdateManyWithoutSenderInput>
  }

  export type AnnoucementsScalarWhereInput = {
    AND?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
    OR?: AnnoucementsScalarWhereInput[]
    NOT?: AnnoucementsScalarWhereInput | AnnoucementsScalarWhereInput[]
    id?: StringFilter<"Annoucements"> | string
    Text?: StringFilter<"Annoucements"> | string
    SenderId?: StringFilter<"Annoucements"> | string
    Title?: StringFilter<"Annoucements"> | string
    Date?: DateTimeFilter<"Annoucements"> | Date | string
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
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutUserInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
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
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Announcements?: AnnoucementsCreateNestedManyWithoutSenderInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutSenderInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
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
  }

  export type ClassUncheckedCreateWithoutParentInput = {
    id?: string
    Name: string
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutParentInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutParentInput, ClassUncheckedCreateWithoutParentInput>
  }

  export type Meeting_RequestCreateWithoutSenderInput = {
    id?: string
    date: Date | string
    content: string
    Teacher: TeacherCreateNestedOneWithoutMeetReqRecieveInput
  }

  export type Meeting_RequestUncheckedCreateWithoutSenderInput = {
    id?: string
    date: Date | string
    content: string
    TeacherId: string
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
    Subject: SubjectCreateNestedOneWithoutAcademicsInput
  }

  export type AcademicsUncheckedCreateWithoutParentInput = {
    ExamName: string
    id?: string
    SubjectID: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
  }

  export type AcademicsCreateOrConnectWithoutParentInput = {
    where: AcademicsWhereUniqueInput
    create: XOR<AcademicsCreateWithoutParentInput, AcademicsUncheckedCreateWithoutParentInput>
  }

  export type AcademicsCreateManyParentInputEnvelope = {
    data: AcademicsCreateManyParentInput | AcademicsCreateManyParentInput[]
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
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Announcements?: AnnoucementsUpdateManyWithoutSenderNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutSenderNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
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
  }

  export type ClassUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
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
    SenderId?: StringFilter<"Meeting_Request"> | string
    date?: DateTimeFilter<"Meeting_Request"> | Date | string
    content?: StringFilter<"Meeting_Request"> | string
    TeacherId?: StringFilter<"Meeting_Request"> | string
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
  }

  export type UserCreateWithoutTeacherInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Announcements?: AnnoucementsCreateNestedManyWithoutSenderInput
    Parent?: ParentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Announcements?: AnnoucementsUncheckedCreateNestedManyWithoutSenderInput
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type Meeting_RequestCreateWithoutTeacherInput = {
    id?: string
    date: Date | string
    content: string
    Sender: ParentCreateNestedOneWithoutMeetReqSendInput
  }

  export type Meeting_RequestUncheckedCreateWithoutTeacherInput = {
    id?: string
    SenderId: string
    date: Date | string
    content: string
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
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Announcements?: AnnoucementsUpdateManyWithoutSenderNestedInput
    Parent?: ParentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Announcements?: AnnoucementsUncheckedUpdateManyWithoutSenderNestedInput
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
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

  export type ClassCreateWithoutSubjectsInput = {
    id?: string
    Name: string
    Parent?: ParentCreateNestedManyWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSubjectsInput = {
    id?: string
    Name: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSubjectsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSubjectsInput, ClassUncheckedCreateWithoutSubjectsInput>
  }

  export type TeacherCreateWithoutSubjectsInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    MeetReqRecieve?: Meeting_RequestCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubjectsInput = {
    Tid: string
    TeacherName: string
    MeetReqRecieve?: Meeting_RequestUncheckedCreateNestedManyWithoutTeacherInput
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
    Parent: ParentCreateNestedOneWithoutAcademicsInput
  }

  export type AcademicsUncheckedCreateWithoutSubjectInput = {
    ExamName: string
    id?: string
    Pid: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
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
  }

  export type ClassUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
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
  }

  export type TeacherUncheckedUpdateWithoutSubjectsInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    MeetReqRecieve?: Meeting_RequestUncheckedUpdateManyWithoutTeacherNestedInput
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
    User: UserCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutClassInput = {
    Pid: string
    StudentName: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
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

  export type UserCreateWithoutAnnouncementsInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnouncementsInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnouncementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
  }

  export type UserUpsertWithoutAnnouncementsInput = {
    update: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UserUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ParentCreateWithoutMeetReqSendInput = {
    StudentName: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutMeetReqSendInput = {
    Pid: string
    StudentName: string
    ClassId: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutMeetReqSendInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutMeetReqSendInput, ParentUncheckedCreateWithoutMeetReqSendInput>
  }

  export type TeacherCreateWithoutMeetReqRecieveInput = {
    TeacherName: string
    User: UserCreateNestedOneWithoutTeacherInput
    Subjects?: SubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutMeetReqRecieveInput = {
    Tid: string
    TeacherName: string
    Subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
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
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutMeetReqSendInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
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
  }

  export type TeacherUncheckedUpdateWithoutMeetReqRecieveInput = {
    Tid?: StringFieldUpdateOperationsInput | string
    TeacherName?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ClassCreateWithoutAttendanceInput = {
    id?: string
    Name: string
    Parent?: ParentCreateNestedManyWithoutClassInput
    Subjects?: SubjectCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendanceInput = {
    id?: string
    Name: string
    Parent?: ParentUncheckedCreateNestedManyWithoutClassInput
    Subjects?: SubjectUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAttendanceInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
  }

  export type ParentCreateWithoutAttendanceInput = {
    StudentName: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Academics?: AcademicsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutAttendanceInput = {
    Pid: string
    StudentName: string
    ClassId: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Academics?: AcademicsUncheckedCreateNestedManyWithoutParentInput
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
  }

  export type ClassUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUncheckedUpdateManyWithoutClassNestedInput
    Subjects?: SubjectUncheckedUpdateManyWithoutClassNestedInput
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
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutAttendanceInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateWithoutAcademicsInput = {
    StudentName: string
    User: UserCreateNestedOneWithoutParentInput
    Class: ClassCreateNestedOneWithoutParentInput
    MeetReqSend?: Meeting_RequestCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutAcademicsInput = {
    Pid: string
    StudentName: string
    ClassId: string
    MeetReqSend?: Meeting_RequestUncheckedCreateNestedManyWithoutSenderInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutParentInput
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
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Class?: ClassUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutAcademicsInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    ClassId?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
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

  export type AnnoucementsCreateManySenderInput = {
    id?: string
    Text: string
    Title: string
    Date: Date | string
  }

  export type AnnoucementsUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnoucementsUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnoucementsUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    Title?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meeting_RequestCreateManySenderInput = {
    id?: string
    date: Date | string
    content: string
    TeacherId: string
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
  }

  export type Meeting_RequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    Teacher?: TeacherUpdateOneRequiredWithoutMeetReqRecieveNestedInput
  }

  export type Meeting_RequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type Meeting_RequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    TeacherId?: StringFieldUpdateOperationsInput | string
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
    Subject?: SubjectUpdateOneRequiredWithoutAcademicsNestedInput
  }

  export type AcademicsUncheckedUpdateWithoutParentInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicsUncheckedUpdateManyWithoutParentInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    SubjectID?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meeting_RequestCreateManyTeacherInput = {
    id?: string
    SenderId: string
    date: Date | string
    content: string
  }

  export type SubjectCreateManyTeacherInput = {
    Sid?: string
    Name: string
    ClassId: string
  }

  export type Meeting_RequestUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    Sender?: ParentUpdateOneRequiredWithoutMeetReqSendNestedInput
  }

  export type Meeting_RequestUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    SenderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type Meeting_RequestUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    SenderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
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

  export type AcademicsCreateManySubjectInput = {
    ExamName: string
    id?: string
    Pid: string
    Grade: string
    ReportLink?: string | null
    Date: Date | string
  }

  export type AcademicsUpdateWithoutSubjectInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneRequiredWithoutAcademicsNestedInput
  }

  export type AcademicsUncheckedUpdateWithoutSubjectInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicsUncheckedUpdateManyWithoutSubjectInput = {
    ExamName?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    Pid?: StringFieldUpdateOperationsInput | string
    Grade?: StringFieldUpdateOperationsInput | string
    ReportLink?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentCreateManyClassInput = {
    Pid: string
    StudentName: string
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

  export type ParentUpdateWithoutClassInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    MeetReqSend?: Meeting_RequestUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutClassInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    MeetReqSend?: Meeting_RequestUncheckedUpdateManyWithoutSenderNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutParentNestedInput
    Academics?: AcademicsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateManyWithoutClassInput = {
    Pid?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
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